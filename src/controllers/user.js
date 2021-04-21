#!/usr/bin/node
/* connection to the database using the node pg module.
    - create multiple simultaneous connections
    to the database using the pool methode */

const { Pool } = require('pg');
/* use module nodejs fs to read files */
const fs = require('fs');

/* connection with the database */
const pool = new Pool({
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || process.env.USER || 'postgres',
    database: process.env.PGDATABASE || process.env.USER || 'databaseportaleducativo',
    password: process.env.PGPASSWORD || 'root'
});

/* function that reads file userDataGenerate  and stores
    it in the database, returns a json object with
    the data obtained */
const storeFileIntoDB = async (res, req) => {
    try {
        const rawdata = fs.readFileSync('../PortalEducativo/src/data/userDataGenerate.json');
        const jobs = JSON.parse(rawdata);

        for (const user of jobs) {
        const { firtName, lastName, phoneNumber, address, city, country, email } = user;
        const response = await pool.query('INSERT INTO jobpost (firtName, lastName, phoneNumber, address, city, country, email) VALUES ($1, $2, $3, $4, $5, $6, $7)', [firtName, lastName, phoneNumber, address, city, country, email]);
        console.log(response);
    }
    } catch (error) {
        console.log(error);
    }
};

  /* export functions */
module.exports = {
    storeFileIntoDB
};