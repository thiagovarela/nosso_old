use crate::auth;
use thiserror::Error;

/// Enum listing possible authentication error codes.
#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ApplicationError {
    /// An error occurred when connecting to or using the database.
    #[error("database error")]
    DatabaseError(#[from] sqlx::Error),

    #[error("auth error")]
    AuthenticationError(#[from] auth::AuthError),

    #[error("unauthenticated")]
    Unauthenticated,

    #[error("invalid domain in x-forwarded-host")]
    InvalidDomain,

    #[error("missing protobuf field")]
    MissingProtobufField,

    /// Any other, unknown error sources.
    #[error("{0}")]
    Unknown(#[source] Box<dyn std::error::Error + Sync + Send>),
}

impl From<ApplicationError> for tonic::Status {
    fn from(error: ApplicationError) -> tonic::Status {
        match error {
            ApplicationError::DatabaseError(_) => {
                tonic::Status::unavailable(format!("{:?}", error))
            }
            ApplicationError::AuthenticationError(_) => {
                tonic::Status::unavailable(format!("{:?}", error))
            }
            ApplicationError::Unauthenticated => {
                tonic::Status::unauthenticated(format!("{:?}", error))
            }
            ApplicationError::InvalidDomain => {
                tonic::Status::failed_precondition(format!("{:?}", error))
            }
            ApplicationError::MissingProtobufField => {
                tonic::Status::failed_precondition(format!("{:?}", error))
            }
            _ => tonic::Status::unknown(format!("{:?}", error)),
        }
    }
}
