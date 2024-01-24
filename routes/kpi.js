var express = require("express");
var kpiController = require("../controllers/kpiController.js");
var auth = require('../middlewares/authenticate.js')
var app = express();


app.get('/kpi_pagos_mensuales',auth.auth,kpiController.kpi_pagos_mensuales)
app.get('/kpi_pagos_tipo/:year/:month',auth.auth,kpiController.kpi_pagos_tipo)
app.get('/kpi_metodos_pago/:year/:month',auth.auth,kpiController.kpi_metodos_pago)
app.get('/kpi_curso_ganancia/:year/:month',auth.auth,kpiController.kpi_curso_ganancia)
app.get('/kpi_prospectos_mensuales',auth.auth,kpiController.kpi_prospectos_mensuales)
app.get('/kpi_prospectos_genero',auth.auth,kpiController.kpi_prospectos_genero)

module.exports = app;
