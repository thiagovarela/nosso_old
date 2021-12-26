use crate::error::ApplicationError;
use crate::{auth, State};
use auth::AuthClaims;
use std::sync::Arc;

use sqlx::pool::PoolConnection;

use protos::nosso::util::v1::{PageInfo, PageRequest};
use sqlx::{PgPool, Postgres};
use tonic::metadata::AsciiMetadataValue;
use tracing::debug;

#[tonic::async_trait]
pub trait DbExtension {
    type Conn;

    async fn conn(&self) -> Result<Self::Conn, ApplicationError>;
}

#[tonic::async_trait]
impl DbExtension for PgPool {
    type Conn = PoolConnection<Postgres>;

    async fn conn(&self) -> Result<Self::Conn, ApplicationError> {
        self.acquire()
            .await
            .map_err(ApplicationError::DatabaseError)
    }
}

#[derive(Debug)]
pub struct Pagination {
    pub limit: i64,
    pub offset: i64,
    pub page_info: PageInfo,
}

pub trait RequestExtensions {
    fn locale_or_default(&self) -> String;
    fn state(&self) -> Arc<State>;
    fn claims(&self) -> Result<&auth::AuthClaims, ApplicationError>;
    fn domain_from_forwarded_host(&self) -> Result<&str, ApplicationError>;
    fn pagination(
        &self,
        page_request: &Option<PageRequest>,
        total: i64,
    ) -> Result<Pagination, ApplicationError>;
}

impl<T> RequestExtensions for tonic::Request<T> {
    fn locale_or_default(&self) -> String {
        let default = AsciiMetadataValue::from_static("en");
        let locale = self.metadata().get("accept-language").unwrap_or(&default);

        String::from(locale.to_str().unwrap())
    }
    fn state(&self) -> Arc<State> {
        let state = self
            .extensions()
            .get::<Arc<State>>()
            .expect("State must be set using tower_http AddExtensionLayer")
            .clone();
        state
    }
    fn claims(&self) -> Result<&AuthClaims, ApplicationError> {
        match self.extensions().get::<auth::AuthUser>() {
            Some(auth::AuthUser::Authenticated(c)) => Ok(c),
            _ => Err(ApplicationError::Unauthenticated),
        }
    }

    fn domain_from_forwarded_host(&self) -> Result<&str, ApplicationError> {
        match self.metadata().get("x-forwarded-host") {
            Some(value) => {
                let forwarded_host = value
                    .to_str()
                    .map_err(|_| ApplicationError::InvalidDomain)?;
                let host: Vec<&str> = forwarded_host.split(':').collect();
                Ok(host[0])
            }
            _ => Err(ApplicationError::InvalidDomain),
        }
    }
    fn pagination(
        &self,
        page_request: &Option<PageRequest>,
        total: i64,
    ) -> Result<Pagination, ApplicationError> {
        let input = match page_request {
            Some(val) => val.clone(),
            _ => PageRequest { page: 1, size: 100 },
        };

        let size = match input.size {
            0 => 100,
            _ => input.size,
        };

        /// Postgres offset starts with 0
        let offset = match input.page {
            1 => 0,
            _ => input.page * size,
        };

        let page = match input.page {
            0 => 1,
            _ => input.page,
        };

        let next_page = match (offset + size) < total {
            true => page + 1,
            false => 0,
        };
        let prev_page = match page > 1 {
            true => page - 1,
            false => 0,
        };

        let page_info = PageInfo {
            total,
            next_page,
            prev_page,
        };

        debug!(
            "next {} prev {} offset {} size {}",
            next_page, prev_page, offset, size
        );

        Ok(Pagination {
            limit: size,
            offset,
            page_info,
        })
    }
}
