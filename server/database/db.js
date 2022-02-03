// This file connects our server to our DB 

const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: process.env.dbPassword,
    host: 'localhost',
    database: 'pern_todo'
})

module.exports = pool