var express = require("express");
var bodyParser = require("body-parser");
var methodOverrid = require("method-override");

var port = 7000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverrid("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view", "handlebars");


var routes = require("./controllers/burgerControllers.js")

app.use("/", routes);

app.listen(port);