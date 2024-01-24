const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Ciclo_salonSchema = Schema({
    f_dias:[{type:Object,required:true}],
    curso:{type:Schema.ObjectId,ref:'curso',required:false},
    ciclo_curso:{type:Schema.ObjectId,ref:'ciclo_curso',required:false},
    salon:{type:String,required:true},
    aforo_total:{type:Number,required:true},
    aforo_actual:{type:Number,default:0,required:true},
    h_inicio:{type:String,required:true},
    h_fin:{type:String,required:true},
    colaborador:{type:Schema.ObjectId,ref :'colaborador',required:false},
    createdAt:{type:Date,default:Date.now,required:true},

})

module.exports = mongoose.model('ciclo_salon', Ciclo_salonSchema)