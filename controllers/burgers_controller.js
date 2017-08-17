var express = require("express");
var burger = require("../models/burger.js");

//create the router for our app
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Export routes for use by our server (server.js)
module.exports = router;