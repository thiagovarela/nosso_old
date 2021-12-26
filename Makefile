POSTGRES_PASSWORD="verysecret"
POSTGRES_USER="nosso"
DATABASE_URL:="postgres://nosso:verysecret@localhost/nosso_app_docker"

.PHONY: lint_protobufs
lint_protobufs: 
	cd protobufs && buf lint

.PHONY: compile_api_protobufs
compile_api_protobufs: 
	cd web && pnpm run generate:protos

.PHONY: compile_services_protobufs
compile_services_protobufs: 
	rm -rf services/protos/protobufs && cp -R protobufs services/protos/ \
	&& cd services && rm -rf protos/src/gen/* && cargo clean -p protos && cargo build -p protos

.PHONY: compile_protobufs 
compile_protobufs: lint_protobufs compile_api_protobufs compile_services_protobufs

.PHONY: start_db
start_db:
	docker-compose up -d postgres && sleep 2

.PHONY: pre_setup_db
pre_setup_db:
	 docker-compose run -e PGPASSWORD=$(POSTGRES_PASSWORD) --rm postgres \
		 psql -U $(POSTGRES_USER) -d template1 -h postgres -f /docker_setup/database/database_pre_setup.sql

.PHONY: post_setup_db
post_setup_db:
	docker-compose run -e PGPASSWORD=$(POSTGRES_PASSWORD) --rm postgres psql -U $(POSTGRES_USER) -d nosso_app_docker -h postgres  -f ./docker_setup/database/database_post_setup.sql

.PHONY: migrate_main_db
migrate_main_db:
	cd services && sqlx migrate run --database-url=$(DATABASE_URL)

.PHONY: initial_setup
initial_setup: start_db pre_setup_db migrate_main_db post_setup_db

.PHONY: start
start:
	docker-compose up -d