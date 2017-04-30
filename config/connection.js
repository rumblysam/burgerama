//MySql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
});

//Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

module.exports = connection;