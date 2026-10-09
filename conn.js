const mysql = require('mysql');


const conn = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: "",
    database: "ui_3_6_26"
});

module.exports = conn;