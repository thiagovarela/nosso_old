use crate::*;
use fake::Fake;
use http::Uri;
use std::net::SocketAddr;
use std::str::FromStr;
use tokio::net::TcpListener;

#[derive(Debug)]
pub struct TestDatabase {
    pub owner_db_str: String,
    pub user_db_str: String,
    pub database_name: String,
}

pub async fn setup_database() -> Result<TestDatabase, Box<dyn std::error::Error>> {
    let create_db_str = env!("DATABASE_URL", "Missing initial testing DATABASE_URL");
    let pg_pool = PgPool::connect(create_db_str).await?;

    let database_name = format!(
        "nosso_app_docker_{}",
        (4..8).fake::<String>().to_lowercase()
    );
    println!("Creating DB {}", database_name);
    let owner_db_str = format!(
        "postgres://nosso_dev_user_owner:verysecret@localhost/{}",
        database_name
    );
    let user_db_str = format!(
        "postgres://nosso_dev_user_app:verysecret@localhost/{}",
        database_name
    );

    sqlx::query(&format!("drop database if exists {}", database_name))
        .execute(&pg_pool)
        .await?;
    sqlx::query(&format!(
        "create database {} owner nosso_dev_user_owner",
        database_name
    ))
    .execute(&pg_pool)
    .await?;

    sqlx::query("grant app_user to nosso_dev_user_app")
        .execute(&pg_pool)
        .await?;

    let owner_pg_pool = PgPool::connect(&owner_db_str).await?;
    sqlx::migrate!("../migrations").run(&owner_pg_pool).await?;
    sqlx::query(
        "INSERT INTO app.domains (id, name, allowed_host) VALUES (1, 'LocalHost #1', 'localhost')",
    )
    .execute(&owner_pg_pool)
    .await?;

    // Returns the app user database connection string to the app and the owner for test checking
    Ok(TestDatabase {
        owner_db_str,
        user_db_str,
        database_name,
    })
}

pub async fn teardown_database(database_name: &str) -> Result<(), Box<dyn std::error::Error>> {
    let db_str = env!("DATABASE_URL", "Missing initial testing DATABASE_URL");
    let pg_pool = PgPool::connect(db_str).await?;
    sqlx::query("revoke app_user to nosso_dev_user_app")
        .execute(&pg_pool)
        .await?;
    sqlx::query(format!("drop database if exists {}", database_name).as_str())
        .execute(&pg_pool)
        .await?;
    Ok(())
}

pub async fn make_server(addr: SocketAddr, state: State) -> Result<(), Box<dyn std::error::Error>> {
    let layer = tower::ServiceBuilder::new()
        .layer(
            TraceLayer::new_for_grpc()
                .make_span_with(DefaultMakeSpan::new())
                .on_request(DefaultOnRequest::new().level(Level::INFO))
                .on_response(
                    DefaultOnResponse::new()
                        .level(Level::INFO)
                        .latency_unit(LatencyUnit::Millis),
                ),
        )
        .timeout(Duration::from_secs(30))
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

    println!("Listening to {}", addr);

    Server::builder()
        .layer(layer)
        .add_service(health_service)
        .add_service(services::users::UsersServiceServer::new(users))
        .add_service(services::domains::DomainsServiceServer::new(domains))
        .serve(addr)
        .await?;

    Ok(())
}

async fn local_address() -> Result<SocketAddr, tonic::transport::Error> {
    let listener = TcpListener::bind("127.0.0.1:0")
        .await
        .expect("Could not bind ephemeral socket");

    let addr = listener.local_addr().unwrap();

    Ok(addr)
}

pub async fn run_in_background() -> Result<(Uri, TestDatabase), Box<dyn std::error::Error>> {
    let addr = local_address().await?;

    let test_database = setup_database().await?;

    let pool: PgPool = database_connect(&test_database.user_db_str).await?;
    let state = State { pool: pool.clone() };

    tokio::spawn(async move {
        make_server(addr, state).await.unwrap();
    });

    tokio::time::sleep(Duration::from_millis(200)).await;

    let uri = format!("http://{}", addr)
        .parse::<tonic::transport::Uri>()
        .unwrap();

    Ok((uri, test_database))
}

use test_context::AsyncTestContext;

pub struct IntegrationTestContext {
    database_name: String,
    pub owner_pool: Arc<PgPool>,
    pub uri: Uri,
}

#[tonic::async_trait]
impl AsyncTestContext for IntegrationTestContext {
    async fn setup() -> IntegrationTestContext {
        let (uri, test_database) = run_in_background().await.unwrap();
        let owner_pool = database_connect(&test_database.owner_db_str).await.unwrap();
        IntegrationTestContext {
            uri,
            owner_pool: Arc::new(owner_pool),
            database_name: test_database.database_name,
        }
    }

    async fn teardown(self) {
        teardown_database(&self.database_name).await.unwrap();
    }
}
