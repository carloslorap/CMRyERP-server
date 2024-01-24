var express = require("express");
var testController = require("../controllers/testController.js");

var app = express();

app.get("/prueba-test" , testController.prueba_test);
module.exports = app;
