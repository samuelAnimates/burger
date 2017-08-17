// Import MySQL connection.
var connection = require("../config/connection.js");

//orm object with methods to create the SQL queries we will need in our app
var orm = {

    selectAll: function(tableName) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            return(result);
          });
    },
    insertOne: function(tableName, columns, vals) {
        var queryString = "INSERT INTO " + tableName + " (" + columns.toString() + ") " + "VALUES (" + vals + ") ";
    
        console.log(queryString);
    }//, 
    //updateOne: function() {
        //var queryString = "";
   // }

}


// Export the orm object for use by our models (burger.js)
module.exports = orm;