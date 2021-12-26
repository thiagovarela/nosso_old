use lettre::Message;
use protos::nosso::events::v1::GetCodeEvent;
use rusoto_core::Region;
use rusoto_ses::{RawMessage, SendRawEmailRequest, Ses, SesClient};
use std::collections::HashMap;
use tracing::debug;

pub async fn send_authorization_token_email(
    message: GetCodeEvent,
) -> Result<(), Box<dyn std::error::Error>> {
    let lang = translations::lang_from_accept_language_header(&message.locale);
    let loader = translations::localize(lang).unwrap();
    debug!("{:?} ", loader.current_languages());

    let region = Region::UsEast1;
    let ses_client = SesClient::new(region);

    let subject = loader.get("authenticate-with-token-email-subject");
    let body = loader.get_args(
        "authenticate-with-token-email-body",
        HashMap::from([("token", message.code)]),
    );

    let email = Message::builder()
        .from("no-reply@nosso.org".parse().unwrap())
        .to(message.email.parse().unwrap())
        .subject(subject)
        .body(body)?;

    let raw_email = email.formatted();

    let ses_request = SendRawEmailRequest {
        raw_message: RawMessage {
            data: base64::encode(raw_email).into(),
        },
        ..Default::default()
    };

    ses_client.send_raw_email(ses_request).await?;

    Ok(())
}
