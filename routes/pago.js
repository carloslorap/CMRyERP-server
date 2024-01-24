var express = require("express");
var pagoController = require("../controllers/pagoController.js");
var auth = require('../middlewares/authenticate.js')


var app = express();
app.get('/obtener_matricula_pagos_admin/:id',auth.auth,pagoController.obtener_matricula_pagos_admin)
app.post('/crear_pago_admin',auth.auth,pagoController.crear_pago_admin)
module.exports = app;
