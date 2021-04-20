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
\d admins
\d company
\d jobpost
\d users
\d webpages

SELECT title, location, company, date, link, senorityLevel, place, jobFunction, employmenttype, industries, description, voteup FROM jobpost WHERE voteup > 20 ORDER BY voteup DESC;