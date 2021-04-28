#!/usr/bin/node
/* connection to the database using the node pg module.
    - create multiple simultaneous connections
    to the database using the pool methode */

const { Pool } = require('pg');
/* use module nodejs fs to read files */
const fs = require('fs');

/* connection with the database */
const pool = new Pool({
    host: 'localhost' || 'ec2-54-167-152-185.compute-1.amazonaws.com',
    user: 'postgres' || 'pdnofntdxgbymn',
    database: 'databasetest' || 'd68rat9eifbpva',
    password: 'admin' || 'ee557f99f15a489543b073eaf72798c9d9b26609ef1f218372b80540a89db051'
});

/* function that reads file userDataGenerate  and stores
    it in the database, returns a json object with
    the data obtained */

const storeFileIntoDB = async (res, req) => {
    try {
        const rawdata = fs.readFileSync('src/data/userDataGenerate.json');
        const users = JSON.parse(rawdata);

        for (const user of users.data) {
            console.log(user);
            const  {firstname, lastname, phonenumber, address, city, country, email} = user;
            const response = await pool.query
            ('INSERT INTO users (firstname, lastname, phonenumber, address, city, country, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [firstname, lastname, phonenumber, address, city, country, email]);
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    } finally {
        client.end();
    }
};

module.exports = {
    storeFileIntoDB
};
