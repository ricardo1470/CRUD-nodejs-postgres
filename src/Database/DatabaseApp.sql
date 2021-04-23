-- script that create Database
-- of your Postgres server.
DROP DATABASE IF EXISTS dataBaseTest;
CREATE DATABASE dataBaseTest;
    WITH OWNER postgres;

--show databases
\l

-- script that create tables in DatabsesApp
-- of your Postgres server.

-- table for user
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            firstname VARCHAR(50) NOT NULL,
                            lastname VARCHAR(50) NOT NULL,
                            phonenumber VARCHAR(50) NOT NULL,
                            address VARCHAR(50) NOT NULL,
                            city VARCHAR(50) NOT NULL,
                            country VARCHAR(50) NOT NULL,
                            email VARCHAR(50) NOT NULL UNIQUE);

-- connect or use the database
\c databasetest

-- list tables
\dt

-- describe table
\d users
