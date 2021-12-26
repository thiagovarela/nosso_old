use chrono::{Duration, Utc};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};
use thiserror::Error;

use lazy_static::lazy_static;
use std::env::var;

lazy_static! {
    static ref JWT_SECRET: String = var("JWT_SECRET").unwrap();
}

/// Enum listing possible authentication error codes.
#[derive(Error, Debug)]
#[non_exhaustive]
pub enum AuthError {
    /// If the request was invalid or malformed.
    #[error("the request was invalid")]
    TOTPError,

    /// An error occurred when validating or generating a JWT.
    #[error("invalid token")]
    InvalidToken(#[from] jsonwebtoken::errors::Error),

    /// An error occurred when decoding JWT.
    #[error("invalid token claims")]
    InvalidTokenClaims(#[from] std::num::ParseIntError),

    /// Any other, unknown error sources.
    #[error("{0}")]
    Unknown(#[source] Box<dyn std::error::Error + Sync + Send>),
}

#[derive(Debug)]
pub struct AuthClaims {
    pub user_id: i64,
    pub domain_id: i32,
    pub roles: String,
}

#[derive(Debug)]
pub enum AuthUser {
    Anonymous,
    Authenticated(AuthClaims),
}

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    exp: usize,
    nbf: usize,
    sub: String,
    domain: String,
    roles: String,
}

pub fn issue_token(user_id: i64, domain_id: i32, roles: String) -> Result<String, AuthError> {
    let exp = Utc::now() + Duration::days(7);
    let claims = Claims {
        sub: user_id.to_string(),
        domain: domain_id.to_string(),
        roles,
        exp: exp.timestamp() as usize,
        nbf: Utc::now().timestamp() as usize,
    };
    let token = encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(JWT_SECRET.as_ref()),
    )?;

    Ok(token)
}

pub fn validate_token(token: String) -> Result<AuthClaims, AuthError> {
    let token_data = decode::<Claims>(
        &token,
        &DecodingKey::from_secret(JWT_SECRET.as_ref()),
        &Validation::default(),
    )?;

    Ok(AuthClaims {
        user_id: token_data
            .claims
            .sub
            .parse::<i64>()
            .map_err(AuthError::InvalidTokenClaims)?,
        domain_id: token_data
            .claims
            .domain
            .parse::<i32>()
            .map_err(AuthError::InvalidTokenClaims)?,
        roles: token_data.claims.roles,
    })
}

pub fn generate_totp(secret: &str) -> Result<String, AuthError> {
    let totp = boringauth::oath::TOTPBuilder::new()
        .hex_key(secret)
        .period(300)
        .finalize();
    match totp {
        Ok(totp) => Ok(totp.generate()),
        Err(_e) => Err(AuthError::TOTPError),
    }
}

pub fn verify_totp(secret: &str, token: &str) -> Result<bool, AuthError> {
    let totp = boringauth::oath::TOTPBuilder::new()
        .hex_key(secret)
        .period(300)
        .finalize();
    let is_valid_token = match totp {
        Ok(totp) => totp.is_valid(token),
        Err(_e) => return Err(AuthError::TOTPError),
    };
    Ok(is_valid_token)
}
