DROP TABLE IF EXISTS users;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_name varchar(255) NOT NULL,
  user_email varchar(255) NOT NULL,
  user_password varchar(255) NOT NULL
);

INSERT INTO users(user_name, user_email, user_password)
VALUES('Jesse Carter', 'jessetcarter@hotmail.com', 'thepassword');