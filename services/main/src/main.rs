use crate::error::ApplicationError;
use http::header::AUTHORIZATION;
use opentelemetry::sdk::export::trace::stdout;
use sqlx::postgres::{PgPool, PgPoolOptions};
use sqlx::Executor;
use std::env;
use std::iter::once;
use std::sync::Arc;
use std::time::Duration;
use tonic::transport::Server;
use tower_http::add_extension::AddExtensionLayer;
use tower_http::auth::require_authorization::RequireAuthorizationLayer;
use tower_http::sensitive_headers::SetSensitiveHeadersLayer;
use tower_http::trace::{DefaultMakeSpan, DefaultOnRequest, DefaultOnResponse, TraceLayer};
use tower_http::LatencyUnit;
use tracing::debug;
use tracing::Level;
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;

mod auth;
mod error;
mod events;
mod extensions;
mod server;
mod services;
mod session;

pub struct State {
    pool: PgPool,
}

pub async fn database_connect(db_url: &str) -> Result<PgPool, error::ApplicationError> {
    Ok(PgPoolOptions::new()
        .max_connections(15)
        .after_connect(|conn| {
            Box::pin(async move {
                conn.execute("SET application_name = 'nosso';").await?;
                Ok(())
            })
        })
        .connect(db_url)
        .await
        .map_err(ApplicationError::DatabaseError)?)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // console_subscriber::init();
    // let tracer = stdout::new_pipeline().install_simple();
    // let telemetry = tracing_opentelemetry::layer().with_tracer(tracer);
    // tracing_subscriber::registry()
    //     .with(tracing_subscriber::EnvFilter::from_default_env())
    //     .with(telemetry)
    //     .init();

    tracing_subscriber::fmt()
        .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
        .init();

    let address = "[::0]:50051".parse()?;

    let db_url =
        env::var("DATABASE_URL").expect("Please specify a DATABASE_URL environment variable");
    let pool: PgPool = database_connect(&db_url).await?;
    let state = State { pool: pool.clone() };

    let layer = tower::ServiceBuilder::new()
        .layer(SetSensitiveHeadersLayer::new(once(AUTHORIZATION)))
        .layer(
            TraceLayer::new_for_grpc()
                .make_span_with(DefaultMakeSpan::new())
                .on_request(DefaultOnRequest::new())
                .on_response(DefaultOnResponse::new().latency_unit(LatencyUnit::Millis)),
        )
        .timeout(Duration::from_secs(60))
        .layer(RequireAuthorizationLayer::custom(
            server::RequiredClientKeyAndBearer::new(),
        ))
        .layer(AddExtensionLayer::new(Arc::new(state)))
        .into_inner();

    let users = services::users::Service::default();
    let domains = services::domains::Service::default();

    let (mut health_reporter, health_service) = tonic_health::server::health_reporter();
    health_reporter
        .set_serving::<services::users::UsersServiceServer<services::users::Service>>()
        .await;

    debug!("Listening on {}", address);

    Server::builder()
        .layer(layer)
        .add_service(health_service)
        .add_service(services::users::UsersServiceServer::new(users))
        .add_service(services::domains::DomainsServiceServer::new(domains))
        .serve(address)
        .await?;

    // opentelemetry::global::shutdown_tracer_provider();

    Ok(())
}
