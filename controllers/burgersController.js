var express = require("express");

//create the router for our app
var router = express.Router();

//Import the model to use its database functions
var burger = require("../models/burger.js");

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

router.post("/", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        "'" + req.body.burger_name + "'", req.body.devoured
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne(
        "devoured", req.body.devoured, condition, function() {
            res.redirect("/");
        }
    );
});

// Export routes for use by our server (server.js)
module.exports = router;