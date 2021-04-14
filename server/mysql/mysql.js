const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "password",
  database: "register",
  multipleStatements: true,
});


module.exports = con;