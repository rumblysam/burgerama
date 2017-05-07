var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "name", "lettuce"
    ], [
        req.body.name, req.body.sleepy
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({
        lettuce: req.body.name
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;

