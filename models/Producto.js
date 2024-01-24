const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductoSchema = Schema({
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true},
    slug:{type:String,required:true},
    categoria:{type:String,required:true},

    stock:{type:Number,default:0,required:true},
    tipo_variedad:{type:String,required:true},
    precio:{type:Number,required:false},
    tipo:{type:String,required:true},
    portada:{type:String,required:true},

    estado:{type:Boolean,default:false,required:true},
    createdAt:{type:Date,default:Date.now,required:true},

})

module.exports = mongoose.model('producto', ProductoSchema)