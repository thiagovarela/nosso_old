use std::marker::PhantomData;

use crate::auth;
use http::{header, Request, Response, StatusCode};
use http_body::Body;
use tower_http::auth::AuthorizeRequest;

pub struct RequiredClientKeyAndBearer<ResBody> {
    _ty: PhantomData<fn() -> ResBody>,
}

impl<ResBody> RequiredClientKeyAndBearer<ResBody> {
    pub fn new() -> Self
    where
        ResBody: Body + Default,
    {
        Self { _ty: PhantomData }
    }
}

impl<ResBody> Clone for RequiredClientKeyAndBearer<ResBody> {
    fn clone(&self) -> Self {
        Self { _ty: PhantomData }
    }
}

impl<ResBody> AuthorizeRequest for RequiredClientKeyAndBearer<ResBody>
where
    ResBody: Body + Default,
{
    type Output = auth::AuthUser;
    type ResponseBody = ResBody;

    fn authorize<B>(&mut self, request: &Request<B>) -> Option<Self::Output> {
        let bearer = match request.headers().get(header::AUTHORIZATION) {
            Some(value) => value.to_str().unwrap()[7..].to_string(),
            _ => String::new(),
        };

        if bearer.is_empty() {
            return Some(auth::AuthUser::Anonymous);
        }

        match auth::validate_token(bearer) {
            Ok(claims) => Some(auth::AuthUser::Authenticated(claims)),
            Err(_) => None,
        }
    }

    fn on_authorized<B>(&mut self, request: &mut Request<B>, output: Self::Output) {
        request.extensions_mut().insert(output);
    }

    fn unauthorized_response<B>(&mut self, _request: &Request<B>) -> Response<Self::ResponseBody> {
        let body = ResBody::default();
        let mut res = Response::new(body);
        *res.status_mut() = StatusCode::UNAUTHORIZED;
        res
    }
}
