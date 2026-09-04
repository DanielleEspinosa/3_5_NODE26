const mysql = require('mysql');


const conn = mysql.createConnection((req, res) => {
    host: "localhost",
    username: "root",
    password: "",
    database: ""
});