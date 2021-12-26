#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PageRequest {
    #[prost(int64, tag = "1")]
    pub page: i64,
    #[prost(int64, tag = "2")]
    pub size: i64,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct PageInfo {
    #[prost(int64, tag = "1")]
    pub total: i64,
    #[prost(int64, tag = "2")]
    pub next_page: i64,
    #[prost(int64, tag = "3")]
    pub prev_page: i64,
}
