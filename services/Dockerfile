FROM lukemathwalker/cargo-chef:latest-rust-slim-bullseye AS chef
WORKDIR app
RUN rustup component add rustfmt

FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
ENV SQLX_OFFLINE=true
RUN cargo build --release --bin services

FROM debian:bullseye-slim AS runtime
RUN apt-get update && apt-get install ca-certificates -y && update-ca-certificates
WORKDIR app
COPY --from=builder /app/target/release/services /usr/local/bin

EXPOSE 50051
ENTRYPOINT ["/usr/local/bin/services"]