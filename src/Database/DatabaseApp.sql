-- script that create Database
-- of your Postgres server.
DROP DATABASE IF EXISTS dataBaseTest;
CREATE DATABASE dataBaseTest WITH OWNER postgres;

--show databases
\l

-- script that create tables in DatabsesApp
-- of your Postgres server.

-- table for user
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            firstname VARCHAR(100) NOT NULL,
                            lastname VARCHAR(100) NOT NULL,
                            phonenumber VARCHAR(100) NOT NULL,
                            address VARCHAR(100) NOT NULL,
                            city VARCHAR(100) NOT NULL,
                            country VARCHAR(200) NOT NULL,
                            email VARCHAR(100) NOT NULL);

-- connect or use the database
\c databasetest

-- list tables
\dt

-- describe table
\d users

heroku addons:create heroku-postgresql:hobby-dev

