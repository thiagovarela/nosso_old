use prost::Message;
use protos::nosso::events::v1::GetCodeEvent;

use sqlx::postgres::{PgListener, PgPool, PgPoolOptions};
use sqlx::Executor;
use std::str::FromStr;
mod tasks;

async fn establish_connection() -> Result<PgPool, Box<dyn std::error::Error>> {
    let db_url =
        std::env::var("DATABASE_URL").expect("Please specify a DATABASE_URL environment variable");

    Ok(PgPoolOptions::new()
        .max_connections(2)
        .after_connect(|conn| {
            Box::pin(async move {
                conn.execute("SET application_name = 'workers';").await?;
                Ok(())
            })
        })
        .connect(&db_url)
        .await?)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();

    let pool = establish_connection().await?;
    let mut listener = PgListener::connect_with(&pool).await?;
    listener.listen("events").await?;

    loop {
        let notification = listener.recv().await?;
        let event_id = i64::from_str(notification.payload()).unwrap();

        let event_opt = sqlx::query!(
            r#"
            SELECT ev.name, ev.content
            FROM workers.event_queue evq
            INNER JOIN workers.event ev on (ev.id = evq.event_id)
            WHERE evq.event_id = $1
            "#,
            &event_id
        )
        .fetch_optional(&pool)
        .await?;

        let event = match event_opt {
            Some(ev) => ev,
            None => continue,
        };

        let mut tx = pool.begin().await?;

        let lock_opt = sqlx::query!(
            "SELECT pg_try_advisory_xact_lock(event_id) as lock from workers.event_queue where event_id = $1",
            &event_id
        )
            .fetch_one(&mut tx)
            .await?;

        if lock_opt.lock == Some(false) {
            continue;
        }

        // TODO: redo this shit properly
        if event.name.as_str() == "GetCodeEvent" {
            let message = GetCodeEvent::decode(&event.content[..]).unwrap();
            println!("[processing]: {:?}", message);
            tokio::spawn(async move {
                tasks::send_authorization_token_email(message)
                    .await
                    .unwrap();
            });
        };

        let _remove = sqlx::query!(
            "DELETE from workers.event_queue where event_id = $1",
            &event_id
        )
        .execute(&mut tx)
        .await?;

        tx.commit().await?;
    }
}
