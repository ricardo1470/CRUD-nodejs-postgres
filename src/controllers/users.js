#!/usr/bin/node
/* connection to the database using the node pg module.
    - create multiple simultaneous connections
  to the database using the pool methode */
const { Pool } = require('pg');

/* connection with the database */
const pool = new Pool({
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || process.env.USER || 'postgres',
    database: process.env.PGDATABASE || process.env.USER || 'databaseportaleducativo',
    password: process.env.PGPASSWORD || 'root'
});

const getusers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.json(response.rows)
};

const getuserbyid = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createuser = async (req, res) => {
    const { firtName, lastName, phoneNumber, address, city, country, email } = req.body;
    const response = await pool.query('INSERT INTO users (firtName, lastName, phoneNumber, address, city, country, email) VALUES ($1, $2, $3, $4, $5, $6, $7)', [firtName, lastName, phoneNumber, address, city, country, email]);
    console.log(response);
    res.json({
        message: 'User Added successfully',
        body: {
            user: { firtName, lastName, phoneNumber, address, city, country, email }
        }
    })
};

const updateuser = async (req, res) => {
    const id = req.params.id;
    const { firtName, lastName, phoneNumber, address, city, country, email } = req.body;
    const response = pool.query('UPDATE users SET firtName = $1, lastName = $2, phoneNumber = $3, address = $4, city = $5, country = $6, email = $7 WHERE id = $8', [firtName, lastName, phoneNumber, address, city, country, email]);
    console.log(response);
    res.json('User Updated Successfully');
};

const deleteuser = async (req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM users where id = $1', [id]);
    res.json(`User ${id} deleted Successfully`);
};

const deleteallusers = async (req, res) => {
    await pool.query('DELETE FROM users');
    res.json(`all users delete`)
};

module.exports = {
    getusers,
    getuserbyid,
    createuser,
    updateuser,
    deleteuser,
    deleteallusers
};