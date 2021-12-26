#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Domain {
    #[prost(int32, tag = "1")]
    pub id: i32,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub allowed_host: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "4")]
    pub created_at: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "5")]
    pub updated_at: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddDomainRequest {
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub allowed_host: ::prost::alloc::string::String,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddDomainResponse {
    #[prost(message, optional, tag = "1")]
    pub domain: ::core::option::Option<Domain>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateDomainRequest {
    #[prost(message, optional, tag = "1")]
    pub domain: ::core::option::Option<Domain>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UpdateDomainResponse {
    #[prost(message, optional, tag = "1")]
    pub domain: ::core::option::Option<Domain>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListDomainsRequest {
    #[prost(message, optional, tag = "1")]
    pub page_request: ::core::option::Option<super::super::util::v1::PageRequest>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListDomainsResponse {
    #[prost(message, optional, tag = "1")]
    pub page_info: ::core::option::Option<super::super::util::v1::PageInfo>,
    #[prost(message, repeated, tag = "2")]
    pub domains: ::prost::alloc::vec::Vec<Domain>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDomainByIdRequest {
    #[prost(int32, tag = "1")]
    pub id: i32,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDomainByIdResponse {
    #[prost(message, optional, tag = "1")]
    pub domain: ::core::option::Option<Domain>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDomainByIdsRequest {
    #[prost(int32, repeated, tag = "1")]
    pub ids: ::prost::alloc::vec::Vec<i32>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetDomainByIdsResponse {
    #[prost(message, repeated, tag = "1")]
    pub domains: ::prost::alloc::vec::Vec<Domain>,
}
#[doc = r" Generated client implementations."]
pub mod domains_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    #[derive(Debug, Clone)]
    pub struct DomainsServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl DomainsServiceClient<tonic::transport::Channel> {
        #[doc = r" Attempt to create a new client by connecting to a given endpoint."]
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: std::convert::TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> DomainsServiceClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::ResponseBody: Body + Send + 'static,
        T::Error: Into<StdError>,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> DomainsServiceClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<http::Request<tonic::body::BoxBody>>>::Error:
                Into<StdError> + Send + Sync,
        {
            DomainsServiceClient::new(InterceptedService::new(inner, interceptor))
        }
        #[doc = r" Compress requests with `gzip`."]
        #[doc = r""]
        #[doc = r" This requires the server to support it otherwise it might respond with an"]
        #[doc = r" error."]
        pub fn send_gzip(mut self) -> Self {
            self.inner = self.inner.send_gzip();
            self
        }
        #[doc = r" Enable decompressing responses with `gzip`."]
        pub fn accept_gzip(mut self) -> Self {
            self.inner = self.inner.accept_gzip();
            self
        }
        pub async fn add_domain(
            &mut self,
            request: impl tonic::IntoRequest<super::AddDomainRequest>,
        ) -> Result<tonic::Response<super::AddDomainResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path =
                http::uri::PathAndQuery::from_static("/nosso.domains.v1.DomainsService/AddDomain");
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn update_domain(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdateDomainRequest>,
        ) -> Result<tonic::Response<super::UpdateDomainResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/nosso.domains.v1.DomainsService/UpdateDomain",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn list_domains(
            &mut self,
            request: impl tonic::IntoRequest<super::ListDomainsRequest>,
        ) -> Result<tonic::Response<super::ListDomainsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/nosso.domains.v1.DomainsService/ListDomains",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn get_domain_by_id(
            &mut self,
            request: impl tonic::IntoRequest<super::GetDomainByIdRequest>,
        ) -> Result<tonic::Response<super::GetDomainByIdResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/nosso.domains.v1.DomainsService/GetDomainById",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
        pub async fn get_domain_by_ids(
            &mut self,
            request: impl tonic::IntoRequest<super::GetDomainByIdsRequest>,
        ) -> Result<tonic::Response<super::GetDomainByIdsResponse>, tonic::Status> {
            self.inner.ready().await.map_err(|e| {
                tonic::Status::new(
                    tonic::Code::Unknown,
                    format!("Service was not ready: {}", e.into()),
                )
            })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/nosso.domains.v1.DomainsService/GetDomainByIds",
            );
            self.inner.unary(request.into_request(), path, codec).await
        }
    }
}
#[doc = r" Generated server implementations."]
pub mod domains_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    #[doc = "Generated trait containing gRPC methods that should be implemented for use with DomainsServiceServer."]
    #[async_trait]
    pub trait DomainsService: Send + Sync + 'static {
        async fn add_domain(
            &self,
            request: tonic::Request<super::AddDomainRequest>,
        ) -> Result<tonic::Response<super::AddDomainResponse>, tonic::Status>;
        async fn update_domain(
            &self,
            request: tonic::Request<super::UpdateDomainRequest>,
        ) -> Result<tonic::Response<super::UpdateDomainResponse>, tonic::Status>;
        async fn list_domains(
            &self,
            request: tonic::Request<super::ListDomainsRequest>,
        ) -> Result<tonic::Response<super::ListDomainsResponse>, tonic::Status>;
        async fn get_domain_by_id(
            &self,
            request: tonic::Request<super::GetDomainByIdRequest>,
        ) -> Result<tonic::Response<super::GetDomainByIdResponse>, tonic::Status>;
        async fn get_domain_by_ids(
            &self,
            request: tonic::Request<super::GetDomainByIdsRequest>,
        ) -> Result<tonic::Response<super::GetDomainByIdsResponse>, tonic::Status>;
    }
    #[derive(Debug)]
    pub struct DomainsServiceServer<T: DomainsService> {
        inner: _Inner<T>,
        accept_compression_encodings: (),
        send_compression_encodings: (),
    }
    struct _Inner<T>(Arc<T>);
    impl<T: DomainsService> DomainsServiceServer<T> {
        pub fn new(inner: T) -> Self {
            let inner = Arc::new(inner);
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
            }
        }
        pub fn with_interceptor<F>(inner: T, interceptor: F) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for DomainsServiceServer<T>
    where
        T: DomainsService,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = Never;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(&mut self, _cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/nosso.domains.v1.DomainsService/AddDomain" => {
                    #[allow(non_camel_case_types)]
                    struct AddDomainSvc<T: DomainsService>(pub Arc<T>);
                    impl<T: DomainsService> tonic::server::UnaryService<super::AddDomainRequest> for AddDomainSvc<T> {
                        type Response = super::AddDomainResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::AddDomainRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).add_domain(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AddDomainSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/nosso.domains.v1.DomainsService/UpdateDomain" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateDomainSvc<T: DomainsService>(pub Arc<T>);
                    impl<T: DomainsService> tonic::server::UnaryService<super::UpdateDomainRequest>
                        for UpdateDomainSvc<T>
                    {
                        type Response = super::UpdateDomainResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateDomainRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).update_domain(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateDomainSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/nosso.domains.v1.DomainsService/ListDomains" => {
                    #[allow(non_camel_case_types)]
                    struct ListDomainsSvc<T: DomainsService>(pub Arc<T>);
                    impl<T: DomainsService> tonic::server::UnaryService<super::ListDomainsRequest>
                        for ListDomainsSvc<T>
                    {
                        type Response = super::ListDomainsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListDomainsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).list_domains(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListDomainsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/nosso.domains.v1.DomainsService/GetDomainById" => {
                    #[allow(non_camel_case_types)]
                    struct GetDomainByIdSvc<T: DomainsService>(pub Arc<T>);
                    impl<T: DomainsService> tonic::server::UnaryService<super::GetDomainByIdRequest>
                        for GetDomainByIdSvc<T>
                    {
                        type Response = super::GetDomainByIdResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetDomainByIdRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).get_domain_by_id(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetDomainByIdSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/nosso.domains.v1.DomainsService/GetDomainByIds" => {
                    #[allow(non_camel_case_types)]
                    struct GetDomainByIdsSvc<T: DomainsService>(pub Arc<T>);
                    impl<T: DomainsService>
                        tonic::server::UnaryService<super::GetDomainByIdsRequest>
                        for GetDomainByIdsSvc<T>
                    {
                        type Response = super::GetDomainByIdsResponse;
                        type Future = BoxFuture<tonic::Response<Self::Response>, tonic::Status>;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetDomainByIdsRequest>,
                        ) -> Self::Future {
                            let inner = self.0.clone();
                            let fut = async move { (*inner).get_domain_by_ids(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetDomainByIdsSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec).apply_compression_config(
                            accept_compression_encodings,
                            send_compression_encodings,
                        );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => Box::pin(async move {
                    Ok(http::Response::builder()
                        .status(200)
                        .header("grpc-status", "12")
                        .header("content-type", "application/grpc")
                        .body(empty_body())
                        .unwrap())
                }),
            }
        }
    }
    impl<T: DomainsService> Clone for DomainsServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
            }
        }
    }
    impl<T: DomainsService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(self.0.clone())
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: DomainsService> tonic::transport::NamedService for DomainsServiceServer<T> {
        const NAME: &'static str = "nosso.domains.v1.DomainsService";
    }
}
