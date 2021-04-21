-- script that create Database
-- of your Postgres server.
DROP DATABASE IF EXISTS dataBasePortalEducativo;
CREATE DATABASE dataBasePortalEducativo;
    WITH OWNER postgres;

--show databases
\l

-- script that create tables in DatabsesApp
-- of your Postgres server.

-- table for user
CREATE TABLE IF NOT EXISTS users (
                            Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                            firstNane VARCHAR(20) NOT NULL,
                            Last_name VARCHAR(40) NOT NULL,
                            phoneNumber INT NOT NULL,
                            address VARCHAR(40) NOT NULL,
                            City VARCHAR(40) NOT NULL,
                            country VARCHAR(40) NOT NULL,
                            Email VARCHAR(50) NOT NULL UNIQUE);

-- connect or use the database
\c databaseportaleducativo

-- list tables
\dt

-- describe table
-- \d nametable
