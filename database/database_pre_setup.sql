-- template for local development
create role nosso_dev_user_owner login noinherit encrypted password 'very;secret';
create role nosso_dev_user_app login noinherit encrypted password 'very;secret';
create role app_user noinherit;
grant app_user to nosso_dev_user_app;

create database nosso_app_docker owner nosso_dev_user_owner;