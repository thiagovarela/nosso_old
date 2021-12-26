use sqlx::PgConnection;

#[tonic::async_trait]
pub trait EventsRepository: Send + Sync + 'static {
    async fn events_save_worker_event(
        &mut self,
        name: &'static str,
        event: Vec<u8>,
    ) -> Result<(), crate::error::ApplicationError>;
}

#[tonic::async_trait]
impl EventsRepository for PgConnection {
    async fn events_save_worker_event(
        &mut self,
        name: &'static str,
        event: Vec<u8>,
    ) -> Result<(), crate::error::ApplicationError> {
        sqlx::query!(
            "INSERT INTO workers.event ( name, content ) VALUES ( $1, $2 ) RETURNING id",
            name,
            event.clone()
        )
        .fetch_one(self)
        .await?;
        Ok(())
    }
}
