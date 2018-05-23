// Express dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;
// make public first and take priority over other routes
app.use(express.static("public"));

// body parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require('./controllers/burgers_controller.js')(app);
app.listen(PORT, function(){
    console.log("Server listening on: localhost: " + PORT);
});

