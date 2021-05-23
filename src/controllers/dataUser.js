#!/usr/bin/node
/* connection to the database using the node pg module.
    - create multiple simultaneous connections
    to the database using the pool methode */

const { Pool } = require('pg');
/* use module nodejs fs to read files */
const fs = require('fs');
const path = require('path');


/* connection with the database */
const pool = new Pool({
    host: 'localhost' || 'ec2-34-225-103-117.compute-1.amazonaws.com',
    user: 'postgres' || 'cwmkuncbpbmsjr',
    database: 'databasetest' || 'd5i8ea6g4flv0r',
    password: 'admin' || '517b5b65563b652f24661ae4ac7aadb4c6dba517cbdd8a57f2f0ea8da2240394'
});

/* function that reads file userDataGenerate  and stores
    it in the database, returns a json object with
    the data obtained */

const storeFileIntoDB = async (res, req) => {
    try {
        //const open = fs.open(path.join(__dirname, '../src/data.json'))
        const rawdata = fs.readFileSync('src/controllers/data.json');
        const  { data: users } = JSON.parse(rawdata);
        for (const user of users) {
            console.log(user);
            const  {firstname, lastname, phonenumber, address, city, country, email} = user;
            const response = await pool.query
            ('INSERT INTO users (firstname, lastname, phonenumber, address, city, country, email) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [firstname, lastname, phonenumber, address, city, country, email]);
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    storeFileIntoDB
};
