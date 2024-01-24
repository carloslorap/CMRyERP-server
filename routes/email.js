var express = require("express");
var emailController = require("../controllers/emailController.js");
var auth = require('../middlewares/authenticate.js')


var app = express();
app.get('/obtener_listas_contactos',auth.auth,emailController.obtener_listas_contactos)
app.post('/registrar_lista_contacto',auth.auth,emailController.registrar_lista_contacto)
app.post('/importar_contacto',auth.auth,emailController.importar_contacto)
app.get('/obtener_contactos_lista/:id',auth.auth,emailController.obtener_contactos_lista)
app.get('/obtener_campaigns',auth.auth,emailController.obtener_campaigns)
app.post('/crear_campaign',auth.auth,emailController.crear_campaign)
app.post('/send_email_campaign',auth.auth,emailController.send_email_campaign)

module.exports = app;
