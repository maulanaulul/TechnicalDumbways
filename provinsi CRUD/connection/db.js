const mysql = require ('mysql2')

const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'provinsi'
})

module.exports = connectionPool