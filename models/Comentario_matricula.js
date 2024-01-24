const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Comentario_matriculaSchema = Schema({
    matricula:{type:Schema.ObjectId,ref:'matricula',required:true},

    actividad:{type:String,required:true},

    createdAt:{type:Date,default:Date.now,required:true}, 

})

module.exports = mongoose.model('comentario_matricula', Comentario_matriculaSchema)