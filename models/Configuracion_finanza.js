const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Configuracion_finanzalSchema = Schema({

    ganancia_producto:{type:Number,required:true},
    updatedAt:{type:Date,required:true},

})

module.exports = mongoose.model('configuracion_finanza', Configuracion_finanzalSchema)  