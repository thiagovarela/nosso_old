use prost::Message;
use protos::nosso::events::v1::{GetCodeEvent, RegisterUserEvent};
use sqlx::PgConnection;
use tonic::{Request, Response, Status};
use tracing::debug;
use uuid::Uuid;

use crate::auth;
use prost_types::Timestamp;
use protos::nosso::users::v1 as users_v1;
use protos::nosso::users::v1::{
    GetAuthenticationTokenRequest, GetAuthenticationTokenResponse, GetCodeRequest, GetCodeResponse,
};
pub use users_v1::users_service_server::{UsersService, UsersServiceServer};
use users_v1::{
    GetUserProfileRequest, GetUserProfileResponse, ListUsersRequest, ListUsersResponse,
    RegisterUserRequest, RegisterUserResponse,
};

use crate::error::ApplicationError;
use crate::events::EventsRepository;
use crate::extensions::*;
use crate::services::domains::DomainsRepository;
use crate::session::set_user_session_and_get_connection;

#[derive(Debug)]
struct User {
    id: i64,
    name: Option<String>,
    email: String,
    domain_id: i32,
    shared_secret: Option<Uuid>,
    roles: Option<Vec<String>>,
    created_at: chrono::NaiveDateTime,
    updated_at: chrono::NaiveDateTime,
}

impl User {
    fn as_proto(&self) -> users_v1::User {
        users_v1::User {
            id: self.id,
            email: self.email.clone(),
            display_name: self.name.clone().unwrap_or_default(),
            domain_id: self.domain_id,
            roles: self.roles.clone().unwrap_or_default(),
            created_at: Some(Timestamp {
                seconds: self.created_at.timestamp(),
                nanos: 0,
            }),
            updated_at: Some(Timestamp {
                seconds: self.updated_at.timestamp(),
                nanos: 0,
            }),
        }
    }
}

#[tonic::async_trait]
trait UsersRepository: Send + Sync + 'static {
    async fn register_by_email(
        &mut self,
        email: &str,
        domain_id: i32,
    ) -> Result<User, ApplicationError>;

    async fn user_by_id(&mut self, user_id: i64) -> Result<User, ApplicationError>;

    async fn user_by_email(
        &mut self,
        email: &str,
        domain_id: i32,
    ) -> Result<User, crate::error::ApplicationError>;

    async fn users_count(&mut self) -> Result<i64, crate::error::ApplicationError>;

    async fn users_list_users(
        &mut self,
        limit: i64,
        offset: i64,
    ) -> Result<Vec<User>, ApplicationError>;
}

#[tonic::async_trait]
impl UsersRepository for PgConnection {
    async fn register_by_email(
        &mut self,
        email: &str,
        domain_id: i32,
    ) -> Result<User, ApplicationError> {
        Ok(sqlx::query_as!(
            User,
            r#"
                SELECT u.id as "id!",
                    u.name as "name?",
                    u.domain_id as "domain_id!",
                    u.email::text as "email!",
                    u.roles as "roles?",
                    u.shared_secret as "shared_secret?",
                    u.created_at as "created_at!",
                    u.updated_at as "updated_at!" 
                  from (select * from auth.register_user( $1, $2 )) as u
            "#,
            email,
            domain_id
        )
        .fetch_one(self)
        .await?)
    }

    async fn user_by_id(&mut self, user_id: i64) -> Result<User, ApplicationError> {
        Ok(sqlx::query_as!(
            User,
            r#"
                SELECT u.id as "id!",
                    u.name as "name?",
                    u.domain_id as "domain_id!",
                    u.email::text as "email!",
                    u.roles as "roles?",
                    u.shared_secret as "shared_secret?",
                    u.created_at as "created_at!",
                    u.updated_at as "updated_at!" 
                from app.users u where u.id = $1
            "#,
            user_id
        )
        .fetch_one(self)
        .await?)
    }

    async fn user_by_email(
        &mut self,
        email: &str,
        domain_id: i32,
    ) -> Result<User, ApplicationError> {
        Ok(sqlx::query_as!(
            User,
            r#"
                SELECT u.id as "id!",
                    u.name as "name?",
                    u.domain_id as "domain_id!",
                    u.email::text as "email!",
                    u.roles as "roles?",
                    u.shared_secret as "shared_secret?",
                    u.created_at as "created_at!",
                    u.updated_at as "updated_at!" 
                  from (select * from auth.user_by_email( $1, $2 )) as u
            "#,
            email,
            domain_id
        )
        .fetch_one(self)
        .await?)
    }

    async fn users_count(&mut self) -> Result<i64, ApplicationError> {
        Ok(
            sqlx::query_scalar!(r#"select count(id) as "count!" from app.users"#)
                .fetch_one(self)
                .await?,
        )
    }

    async fn users_list_users(
        &mut self,
        limit: i64,
        offset: i64,
    ) -> Result<Vec<User>, ApplicationError> {
        Ok(sqlx::query_as!(
            User,
            r#"
               SELECT id,
               name as "name?",
               domain_id,
               email::text as "email!",
               roles, 
               shared_secret as "shared_secret?",
               created_at,
               updated_at
               FROM app.users ORDER BY created_at ASC LIMIT $1 OFFSET $2  
            "#,
            limit,
            offset
        )
        .fetch_all(self)
        .await?)
    }
}

#[derive(Debug, Default)]
pub struct Service;

#[tonic::async_trait]
impl UsersService for Service {
    #[tracing::instrument]
    async fn register_user(
        &self,
        request: Request<RegisterUserRequest>,
    ) -> Result<Response<RegisterUserResponse>, Status> {
        let mut conn = request.state().pool.conn().await?;
        let forwarded_domain = request.domain_from_forwarded_host()?;
        let domain = conn.domains_get_domain_by_host(forwarded_domain).await?;
        let locale = request.locale_or_default();
        let input = request.get_ref();
        let user = conn.register_by_email(&input.email, domain.id).await?;
        let shared_secret: String = user.shared_secret.unwrap().to_simple().to_string();

        let token = auth::generate_totp(shared_secret.as_str())
            .map_err(ApplicationError::AuthenticationError)?;

        let event = RegisterUserEvent {
            email: user.email,
            code: token,
            locale,
        };
        let mut buf: Vec<u8> = vec![];
        event.encode(&mut buf).unwrap();

        conn.events_save_worker_event("RegisterUserEvent", buf)
            .await?;

        Ok(Response::new(RegisterUserResponse { sent: true }))
    }

    #[tracing::instrument]
    async fn get_code(
        &self,
        request: Request<GetCodeRequest>,
    ) -> Result<Response<GetCodeResponse>, Status> {
        let mut conn = request.state().pool.conn().await?;
        let forwarded_domain = request.domain_from_forwarded_host()?;
        let domain = conn.domains_get_domain_by_host(forwarded_domain).await?;
        let locale = request.locale_or_default();
        let input = request.get_ref();

        let user = conn.user_by_email(&input.email, domain.id).await?;

        let shared_secret: String = match user.shared_secret {
            Some(secret) => secret.to_simple().to_string(),
            _ => {
                return Err(Status::permission_denied(
                    "Could not get shared secret for the user".to_string(),
                ))
            }
        };

        let token =
            auth::generate_totp(&shared_secret).map_err(ApplicationError::AuthenticationError)?;

        println!("{:?}", token);

        let event = GetCodeEvent {
            email: user.email,
            code: token,
            locale,
        };
        let mut buf: Vec<u8> = vec![];
        event.encode(&mut buf).unwrap();

        conn.events_save_worker_event("GetCodeEvent", buf).await?;

        Ok(Response::new(GetCodeResponse { sent: true }))
    }

    #[tracing::instrument]
    async fn get_authentication_token(
        &self,
        request: Request<GetAuthenticationTokenRequest>,
    ) -> Result<Response<GetAuthenticationTokenResponse>, Status> {
        let mut conn = request.state().pool.conn().await?;
        let forwarded_domain = request.domain_from_forwarded_host()?;
        let domain = conn.domains_get_domain_by_host(forwarded_domain).await?;

        let input = request.get_ref();
        let user = conn.user_by_email(&input.email, domain.id).await?;
        let shared_secret: String = match user.shared_secret {
            Some(secret) => secret.to_simple().to_string(),
            _ => {
                return Err(Status::permission_denied(
                    "Could not get shared secret for the user".to_string(),
                ))
            }
        };

        let is_valid_token = auth::verify_totp(&shared_secret, input.token.as_str())
            .map_err(ApplicationError::AuthenticationError)?;

        if is_valid_token {
            let user_roles = match user.roles {
                Some(v) => v.join(","),
                None => String::new(),
            };
            Ok(Response::new(GetAuthenticationTokenResponse {
                jwt: auth::issue_token(user.id, user.domain_id, user_roles)
                    .map_err(ApplicationError::AuthenticationError)?,
            }))
        } else {
            Err(Status::permission_denied("Code is invalid".to_string()))
        }
    }

    #[tracing::instrument]
    async fn get_user_profile(
        &self,
        request: Request<GetUserProfileRequest>,
    ) -> Result<Response<GetUserProfileResponse>, Status> {
        let mut conn =
            set_user_session_and_get_connection::<GetUserProfileRequest>(&request).await?;

        let claims = request.claims()?;
        let user = conn.user_by_id(claims.user_id).await?;

        Ok(Response::new(GetUserProfileResponse {
            email: user.email,
            display_name: user.name.unwrap_or_default(),
            roles: user.roles.unwrap_or_default(),
        }))
    }

    #[tracing::instrument]
    async fn list_users(
        &self,
        request: Request<ListUsersRequest>,
    ) -> Result<Response<ListUsersResponse>, Status> {
        let mut conn = set_user_session_and_get_connection::<ListUsersRequest>(&request).await?;
        let input = request.get_ref();
        let total_users = conn.users_count().await?;

        let pagination = request.pagination(&input.page_request, total_users)?;

        let users: Vec<User> = conn
            .users_list_users(pagination.limit, pagination.offset)
            .await?;

        Ok(Response::new(users_v1::ListUsersResponse {
            page_info: Some(pagination.page_info.clone()),
            users: users.iter().map(|t| t.as_proto()).collect(),
        }))
    }
}
