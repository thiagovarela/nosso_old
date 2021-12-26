use crate::auth;
use crate::error::ApplicationError;
use crate::extensions::*;
use crate::services::domains::DomainsRepository;
use sqlx::pool::PoolConnection;
use sqlx::{PgConnection, Postgres};
use tonic::Request;
use tracing::{debug, info};

#[tonic::async_trait]
pub(crate) trait Session: Send + Sync + 'static {
    async fn session_start_for_claims(
        &mut self,
        claims: &auth::AuthClaims,
    ) -> Result<(), super::error::ApplicationError>;
}

#[tonic::async_trait]
impl Session for PgConnection {
    async fn session_start_for_claims(
        &mut self,
        claims: &auth::AuthClaims,
    ) -> Result<(), super::error::ApplicationError> {
        sqlx::query!(
            r#"
                select * from auth.configure_current_user($1, $2, $3);
            "#,
            &claims.user_id,
            &claims.domain_id,
            &claims.roles
        )
        .fetch_one(self)
        .await?;
        info!("Session started for {:?}", claims);
        Ok(())
    }
}

pub async fn set_user_session_and_get_connection<T>(
    request: &Request<T>,
) -> Result<PoolConnection<Postgres>, ApplicationError> {
    let claims = request.claims()?;
    let mut conn = request.state().pool.conn().await?;
    let forwarded_domain = request.domain_from_forwarded_host()?;
    conn.domains_get_domain_by_id_and_host(claims.domain_id, forwarded_domain)
        .await?;
    conn.session_start_for_claims(claims).await?;
    Ok(conn)
}
