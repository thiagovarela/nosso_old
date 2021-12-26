use crate::error::ApplicationError;
use crate::extensions::RequestExtensions;
use crate::session::set_user_session_and_get_connection;
pub use domains_v1::domains_service_server::{DomainsService, DomainsServiceServer};
use prost_types::Timestamp;
use protos::nosso::domains::v1 as domains_v1;
use protos::nosso::domains::v1::{
    AddDomainRequest, AddDomainResponse, GetDomainByIdRequest, GetDomainByIdResponse,
    GetDomainByIdsRequest, GetDomainByIdsResponse, ListDomainsRequest, ListDomainsResponse,
    UpdateDomainRequest, UpdateDomainResponse,
};
use sqlx::PgConnection;
use tonic::{Request, Response, Status};
use tracing::debug;

#[derive(Debug)]
pub struct Domain {
    pub id: i32,
    pub name: String,
    pub allowed_host: String,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}

impl Domain {
    fn as_proto(&self) -> domains_v1::Domain {
        domains_v1::Domain {
            id: self.id,
            name: self.name.to_string(),
            allowed_host: self.allowed_host.to_string(),
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
pub trait DomainsRepository: Send + Sync + 'static {
    async fn domains_get_domain_by_host(
        &mut self,
        host: &str,
    ) -> Result<Domain, crate::error::ApplicationError>;
    async fn domains_get_domain_by_id_and_host(
        &mut self,
        domain_id: i32,
        host: &str,
    ) -> Result<Domain, crate::error::ApplicationError>;
    async fn domains_add_domain(
        &mut self,
        name: &str,
        allowed_host: &str,
    ) -> Result<Domain, crate::error::ApplicationError>;
    async fn domains_update_domain(
        &mut self,
        id: i32,
        name: &str,
        allowed_host: &str,
    ) -> Result<Domain, crate::error::ApplicationError>;
    async fn domains_list_domains(
        &mut self,
        limit: i64,
        offset: i64,
    ) -> Result<Vec<Domain>, crate::error::ApplicationError>;
    async fn domains_count(&mut self) -> Result<i64, crate::error::ApplicationError>;
    async fn domains_get_domain_by_id(
        &mut self,
        domain_id: i32,
    ) -> Result<Domain, crate::error::ApplicationError>;
    async fn domains_get_domain_by_ids(
        &mut self,
        domain_ids: &Vec<i32>,
    ) -> Result<Vec<Domain>, crate::error::ApplicationError>;
}

#[tonic::async_trait]
impl DomainsRepository for PgConnection {
    async fn domains_get_domain_by_host(&mut self, host: &str) -> Result<Domain, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                SELECT d.id as "id!",
                    d.name as "name!",
                    d.allowed_host as "allowed_host!",
                    d.created_at as "created_at!",
                    d.updated_at as "updated_at!"
                  from (select * from auth.domain_by_host( $1 )) as d
            "#,
            host
        )
        .fetch_one(self)
        .await?)
    }

    async fn domains_get_domain_by_id_and_host(
        &mut self,
        domain_id: i32,
        host: &str,
    ) -> Result<Domain, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                SELECT d.id as "id!",
                    d.name as "name!",
                    d.allowed_host as "allowed_host!",
                    d.created_at as "created_at!",
                    d.updated_at as "updated_at!"
                  from (select * from auth.domain_by_id_and_host( $1, $2 )) as d
            "#,
            domain_id,
            host
        )
        .fetch_one(self)
        .await?)
    }

    async fn domains_add_domain(
        &mut self,
        name: &str,
        allowed_host: &str,
    ) -> Result<Domain, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                INSERT INTO app.domains (name, allowed_host) VALUES ($1, $2) RETURNING *
            "#,
            name,
            allowed_host
        )
        .fetch_one(self)
        .await?)
    }

    async fn domains_update_domain(
        &mut self,
        id: i32,
        name: &str,
        allowed_host: &str,
    ) -> Result<Domain, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                UPDATE app.domains SET
                name = COALESCE($2, name),
                allowed_host = COALESCE($3, allowed_host)
                WHERE id = $1
                RETURNING *
            "#,
            id,
            name,
            allowed_host
        )
        .fetch_one(self)
        .await?)
    }

    async fn domains_list_domains(
        &mut self,
        limit: i64,
        offset: i64,
    ) -> Result<Vec<Domain>, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                SELECT * FROM app.domains ORDER BY created_at ASC LIMIT $1 OFFSET $2  
            "#,
            limit,
            offset
        )
        .fetch_all(self)
        .await?)
    }

    async fn domains_count(&mut self) -> Result<i64, ApplicationError> {
        Ok(
            sqlx::query_scalar!(r#"select count(id) as "count!" from app.domains"#)
                .fetch_one(self)
                .await?,
        )
    }

    async fn domains_get_domain_by_id(
        &mut self,
        domain_id: i32,
    ) -> Result<Domain, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                SELECT * FROM app.domains where id = $1
            "#,
            domain_id
        )
        .fetch_one(self)
        .await?)
    }

    async fn domains_get_domain_by_ids(
        &mut self,
        domain_ids: &Vec<i32>,
    ) -> Result<Vec<Domain>, ApplicationError> {
        Ok(sqlx::query_as!(
            Domain,
            r#"
                SELECT * FROM app.domains where id = ANY($1)
            "#,
            domain_ids
        )
        .fetch_all(self)
        .await?)
    }
}

#[derive(Debug, Default)]
pub struct Service;

#[tonic::async_trait]
impl DomainsService for Service {
    #[tracing::instrument]
    async fn add_domain(
        &self,
        request: Request<AddDomainRequest>,
    ) -> Result<Response<AddDomainResponse>, Status> {
        let mut conn = set_user_session_and_get_connection::<AddDomainRequest>(&request).await?;
        let input = request.get_ref();

        let domain = conn
            .domains_add_domain(&input.name, &input.allowed_host)
            .await?;

        Ok(Response::new(AddDomainResponse {
            domain: Some(domain.as_proto()),
        }))
    }

    #[tracing::instrument]
    async fn update_domain(
        &self,
        request: Request<UpdateDomainRequest>,
    ) -> Result<Response<UpdateDomainResponse>, Status> {
        let mut conn = set_user_session_and_get_connection::<UpdateDomainRequest>(&request).await?;
        let input = request.get_ref();
        let input_domain = match &input.domain {
            Some(domain) => domain,
            _ => return Err(Status::from(ApplicationError::MissingProtobufField)),
        };
        let id = input_domain.id;
        let domain = conn
            .domains_update_domain(id, &input_domain.name, &input_domain.allowed_host)
            .await?;
        Ok(Response::new(UpdateDomainResponse {
            domain: Some(domain.as_proto()),
        }))
    }

    #[tracing::instrument]
    async fn list_domains(
        &self,
        request: Request<ListDomainsRequest>,
    ) -> Result<Response<ListDomainsResponse>, Status> {
        let mut conn = set_user_session_and_get_connection::<ListDomainsRequest>(&request).await?;
        let input = request.get_ref();
        let total_domains = conn.domains_count().await?;

        let pagination = request.pagination(&input.page_request, total_domains)?;

        let domains = conn
            .domains_list_domains(pagination.limit, pagination.offset)
            .await?;
        Ok(Response::new(ListDomainsResponse {
            page_info: Some(pagination.page_info),
            domains: domains.iter().map(|t| t.as_proto()).collect(),
        }))
    }

    #[tracing::instrument]
    async fn get_domain_by_id(
        &self,
        request: Request<GetDomainByIdRequest>,
    ) -> Result<Response<GetDomainByIdResponse>, Status> {
        let mut conn =
            set_user_session_and_get_connection::<GetDomainByIdRequest>(&request).await?;
        let input = request.get_ref();
        let domain = conn.domains_get_domain_by_id(input.id).await?;

        Ok(Response::new(GetDomainByIdResponse {
            domain: Some(domain.as_proto()),
        }))
    }

    #[tracing::instrument]
    async fn get_domain_by_ids(
        &self,
        request: Request<GetDomainByIdsRequest>,
    ) -> Result<Response<GetDomainByIdsResponse>, Status> {
        let mut conn =
            set_user_session_and_get_connection::<GetDomainByIdsRequest>(&request).await?;
        let input = request.get_ref();
        let domains = conn.domains_get_domain_by_ids(&input.ids).await?;

        Ok(Response::new(GetDomainByIdsResponse {
            domains: domains.iter().map(|t| t.as_proto()).collect(),
        }))
    }
}
