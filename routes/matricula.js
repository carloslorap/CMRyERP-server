var express = require("express");
var matriculaController = require("../controllers/matriculaController.js");
var auth = require('../middlewares/authenticate.js')


var app = express();
app.post('/generar_matricula_admin',auth.auth,matriculaController.generar_matricula_admin)
app.get('/obtener_matriculas_hoy',auth.auth,matriculaController.obtener_matriculas_hoy)
app.get('/obtener_matriculas_fechas/:inicio/:hasta/:asesor',auth.auth,matriculaController.obtener_matriculas_fechas)
app.get('/send_voice/:id',auth.auth,matriculaController.send_voice)
app.get('/obtener_matricula_admin/:id',auth.auth,matriculaController.obtener_matricula_admin)
app.get('/cancelar_matricula_admin/:id',auth.auth,matriculaController.cancelar_matricula_admin)
app.get('/obtener_comentarios_matricula_admin/:id',auth.auth,matriculaController.obtener_comentarios_matricula_admin)

module.exports = app;
