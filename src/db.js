const mysql = require('mysql');
const { connect } = require('./routes');

const conection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,      
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conection.connect((error)=>{
    if (error) throw error;
    console.log(`Conectado ao banco ${process.env.DB_NAME}`);
});

module.exports = conection;