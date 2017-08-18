// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host:  process.env.DB_HOST,
  //port: 3306, //process.env.DB_PORT || 
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