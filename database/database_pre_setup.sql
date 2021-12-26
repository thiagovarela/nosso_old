create role nosso_dev_user_owner login encrypted password 'very;secret';
create role nosso_dev_user_app login encrypted password 'very;secret';
create role app_user;
grant app_user to nosso_dev_user_app;

create database nosso_app_docker owner nosso_dev_user_owner;