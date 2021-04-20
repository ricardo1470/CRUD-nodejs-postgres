-- script that create Database
-- of your Postgres server.
DROP DATABASE IF EXISTS dataBasePortalEducativo;
CREATE DATABASE dataBasePortalEducativo; WITH OWNER postgres;

--show databases
\l

-- connect or use the database
\c databaseapp


-- script that create tables in DatabsesApp
-- of your Postgres server.

-- list tables
\dt

-- describe table
-- \d nametable
