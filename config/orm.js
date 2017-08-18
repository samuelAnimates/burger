// Import MySQL connection.
var connection = require("../config/connection.js");

//orm object with methods to create the SQL queries we will need in our app
var orm = {

    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
    insertOne: function(tableName, columns, values, cb) {
        var queryString = "INSERT INTO " + tableName + " (" + columns.toString() + ") " + "VALUES (" + values + ");";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
    }, 
    updateOne: function(tableName, column, value, condition, cb) {
        //UPDATE burgers SET devoured = 1 WHERE id = 3;
        var queryString = "UPDATE " + tableName + " SET " + column + " = " + value + " WHERE " + condition + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    }

};


// Export the orm object for use by our models (burger.js)
module.exports = orm;