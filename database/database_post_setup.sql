
-- Default domain
INSERT INTO app.domains (id, name, allowed_host)
VALUES (1, 'LocalHost #1', 'localhost');

SELECT * FROM auth.register_user('thiago@nosso.org', 1);
UPDATE app.users SET roles = '{superuser}' where id = (select id from auth.user_by_email('thiago@nosso.org', 1));

SELECT * FROM auth.user_by_email('thiago@nosso.org', 1);
