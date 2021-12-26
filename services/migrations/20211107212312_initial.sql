CREATE EXTENSION pgcrypto;
CREATE EXTENSION citext;

REVOKE CREATE ON SCHEMA public FROM PUBLIC;

CREATE OR REPLACE FUNCTION setup_tgr_updated_at(_tbl regclass) RETURNS VOID AS
$$
BEGIN
    EXECUTE format('CREATE TRIGGER set_updated_at BEFORE UPDATE ON %s
                    FOR EACH ROW EXECUTE PROCEDURE tgr_updated_at()', _tbl);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION tgr_updated_at() RETURNS trigger AS
$$
BEGIN
    IF (
                NEW IS DISTINCT FROM OLD AND
                NEW.updated_at IS NOT DISTINCT FROM OLD.updated_at
        ) THEN
        NEW.updated_at := current_timestamp;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SCHEMA workers;

CREATE TABLE workers.event
(
    id         BIGSERIAL PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    content    BYTEA        NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workers.event_queue
(
    event_id BIGINT REFERENCES workers.event (id)
);

CREATE OR REPLACE FUNCTION workers.add_event_to_queue()
    RETURNS TRIGGER
AS
$$
DECLARE
BEGIN
    INSERT INTO workers.event_queue (event_id) values (NEW.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_add_event_to_queue
    AFTER INSERT
    ON workers.event
    FOR EACH ROW
EXECUTE PROCEDURE workers.add_event_to_queue();

CREATE OR REPLACE FUNCTION notify_events()
    RETURNS TRIGGER
AS
$$
DECLARE
BEGIN
    PERFORM pg_notify(CAST('events' AS text), CAST(NEW.event_id AS text));
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_notify_events
    AFTER INSERT
    ON workers.event_queue
    FOR EACH ROW
EXECUTE PROCEDURE notify_events();

-- Identity
CREATE SCHEMA app;
CREATE SCHEMA auth;

CREATE TABLE app.domains
(
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(100) NOT NULL,
    allowed_host VARCHAR(100) NOT NULL,
    created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
SELECT setup_tgr_updated_at('app.domains');
CREATE UNIQUE INDEX allowed_host_unique ON app.domains (allowed_host);

create function auth.domain_by_host(p_host text)
    returns app.domains as
$$
select *
from app.domains
where app.domains.allowed_host = p_host;
$$ language sql strict
                security definer;

create function auth.domain_by_id_and_host(p_domain_id int, p_host text)
    returns app.domains as
$$
select *
from app.domains
where app.domains.id = p_domain_id
  and app.domains.allowed_host = p_host;
$$ language sql strict
                security definer;

CREATE TABLE app.users
(
    id            BIGSERIAL PRIMARY KEY,
    name          VARCHAR(100)  NULL,
    domain_id     INTEGER       NOT NULL REFERENCES app.domains (id) DEFAULT 1,
    email         CITEXT        NOT NULL,
    roles         VARCHAR(20)[] NULL,
    shared_secret UUID          NOT NULL,
    created_at    TIMESTAMP     NOT NULL                             DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP     NOT NULL                             DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (email, domain_id)
);
SELECT setup_tgr_updated_at('app.users');

CREATE TABLE auth.user_auth_attempts
(
    id         BIGSERIAL PRIMARY KEY,
    user_id    BIGINT    NOT NULL REFERENCES app.users (id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create function auth.user_by_email(p_email text, p_domain_id int default 1)
    returns app.users as
$$
select *
from app.users
where app.users.email = p_email
  and app.users.domain_id = p_domain_id;
$$ language sql strict
                security definer;

create or replace function auth.register_user(
    p_email text,
    p_domain_id int default 1
) returns app.users as
$$
declare
    app_user app.users;
begin
    insert into app.users (email, domain_id, shared_secret)
    values (p_email, p_domain_id, gen_random_uuid())
    returning * into app_user;
    return app_user;
end;
$$ language plpgsql strict
                    security definer;

create or replace function auth.configure_current_user(
    p_user_id bigint,
    p_domain_id int,
    p_roles text
) returns void as
$$
begin
    perform set_config('app.user_id', p_user_id::text, false);
    perform set_config('app.user_domain_id', p_domain_id::text, false);
    perform set_config('app.user_roles', p_roles::text, false);
end;
$$ language plpgsql strict
                    security definer;

CREATE OR REPLACE FUNCTION auth.uid() RETURNS bigint AS
$$
SELECT nullif(current_setting('app.user_id', true), '')::bigint;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION auth.roles() RETURNS text[] AS
$$
SELECT string_to_array(nullif(current_setting('app.user_roles', true), ''), ',')::text[];
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION auth.domain_id() RETURNS int AS
$$
SELECT nullif(current_setting('app.user_domain_id', true), '')::int;
$$ LANGUAGE sql STABLE;

-- App user roles and default domains and users table policy
CREATE TYPE auth.user_roles as ENUM ('superuser', 'manager', 'user');

ALTER TABLE app.users
    ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS super_read ON app.users;
CREATE POLICY super_read ON app.users FOR SELECT
    USING ('superuser' = ANY (auth.roles()));

DROP POLICY IF EXISTS manager_read ON app.users;
CREATE POLICY manager_read ON app.users FOR SELECT
    USING (domain_id = auth.domain_id() and 'manager' = ANY (auth.roles()));

DROP POLICY IF EXISTS self_read ON app.users;
CREATE POLICY self_read ON app.users FOR SELECT
    USING (id = auth.uid());

ALTER TABLE app.domains
    ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS superuser_all ON app.domains;
CREATE POLICY superuser_all ON app.domains FOR ALL
    USING ('superuser' = ANY (auth.roles()))
    WITH CHECK ('superuser' = ANY (auth.roles()));