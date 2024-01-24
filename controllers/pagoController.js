var Matricula = require("../models/Matricula.js");
var Matricula_detalle = require("../models/Matricula_detalle.js");
var Ciclo_salon = require("../models/Ciclo_salon.js");
var Pago = require("../models/Pago.js");
var moment = require("moment");
var Comentario_matricula = require("../models/Comentario_matricula.js");



const obtener_matricula_pagos_admin = async function (req, res) {
    if (req.user) {
      let id = req.params["id"];
  try {
      

    let pagos = await Pago.find({matricula:id}).populate({
      path:'matricula_detalle',
      populate:{
        path:'curso'
      }
    }) 
    res.status(200).send({pagos:pagos });
  } catch (error) {
    res.status(200).send({ data: undefined });
  }
  
    } else { 
      res.status(403).send({
        data: undefined,
        message: "NoToken",
      });
    }
  };

const crear_pago_admin = async function (req, res) {
    if (req.user) {
      let data = req.body

      data.asesor = req.user.sub
      data.estado ='Aprobado'

      let pagos = await Pago.find().sort({createdAt:-1})

      if (data.destino_pago != 'Matricula') {
          data.matricula_detalle = data.destino_pago
      }

      if (pagos.length == 0) {
          data.correlativo = 1
          let pago = await Pago.create(data)

          generar_actividad_matricula(data.matricula,"Se genero un pago de "+ data.monto)
          res.status(200).send({ data: pago})
      } else {
        let last_correlativo = pagos[0].correlativo
        data.correlativo =last_correlativo + 1
        let pago = await Pago.create(data)

        generar_actividad_matricula(data.matricula,"Se genero un pago de "+ data.monto)
        res.status(200).send({ data: pago})
      }
  
    } else { 
      res.status(403).send({
        data: undefined,
        message: "NoToken",
      });
    }
  };

const generar_actividad_matricula = async function(matricula,actividad){
    await Comentario_matricula.create({
      matricula: matricula,
      actividad: actividad
    })
  }

  module.exports = {obtener_matricula_pagos_admin,crear_pago_admin};