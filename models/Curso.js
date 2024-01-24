const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CursoSchema = Schema({
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true},
    slug:{type:String,required:true},
    banner:{type:String,required:true},
    estado:{type:Boolean,default:true,required:true},
    createdAt:{type:Date,default:Date.now,required:true},

})

module.exports = mongoose.model('curso', CursoSchema)