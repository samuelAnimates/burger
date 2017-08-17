// Set up MySQL connection.
var mysql = require("mysql");

//access environmental variables for username, password, host
require('dotenv').config({path: '../dotenv.env'});

var connection = mysql.createConnection({
  port: process.env.DB_PORT || 3306,
  host:  process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection setup for our ORM to use.
module.exports = connection;