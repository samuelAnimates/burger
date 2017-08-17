// Import ORM query functions
var orm = require("../config/orm.js");

// Use ORM functions and corresponding inputs to make mySQL queries
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
}

// Export the burger database functions for use by the controller (burgers_controller.js)
module.exports = burger;