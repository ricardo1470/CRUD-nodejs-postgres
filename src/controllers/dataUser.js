#!/usr/bin/node
/* connection to the database using the node pg module.
    - create multiple simultaneous connections
    to the database using the pool methode */

const { Pool } = require('pg');
/* use module nodejs fs to read files */
const fs = require('fs');

/* connection with the database */
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'databasetest',
    password: 'admin'
});

/* function that reads file userDataGenerate  and stores
    it in the database, returns a json object with
    the data obtained */

const storeFileIntoDB = async (res, req) => {
    try {
        const rawdata = fs.readFileSync('src/data/userDataGenerate.json');
        const users = JSON.parse(rawdata);

        for (const user in users) {
            const { firstname, lastname, phonenumber, address, city, country, email } = user;
            const response = await pool.query('INSERT INTO users (firstname, lastname, phonenumber, address, city, country, email) VALUES ($1, $2, $3, $4, $5, $6, $7)', [firstname, lastname, phonenumber, address, city, country, email]);
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    storeFileIntoDB
};
