const mongoose = require('mongoose')
const Schema = mongoose.Schema


const VentaSchema = Schema({
    cliente:{type:Schema.ObjectId,ref:'cliente',required:false},
    asesor:{type:Schema.ObjectId,ref:'colaborador',required:false},
    origen:{type:String,required:true},
    monto:{type:Number,required:true},

    canal:{type:String,required:true},
    dia:{type:String,required:true},
    mes:{type:String,required:true},
    year:{type:String,required:true},
    estado:{type:String,required:true}, 

    createdAt:{type:Date,default:Date.now,required:false},

})

module.exports = mongoose.model('venta', VentaSchema) 