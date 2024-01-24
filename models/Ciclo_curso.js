const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Ciclo_cursoSchema = Schema({
    meses:[{type:Object,required:true}],
    curso:{type:Schema.ObjectId,ref:'curso',required:false},
    nivel:{type:String,required:true},
    sede:{type:String,required:true},
    descripcion:{type:String,required:false},
    v_inicio:{type:String,required:true},
    f_inicio:{type:String,required:true},
    f_fin:{type:String,required:true},
    year:{type:Number,required:true},
    precio:{type:Number,required:true},
    colaborador:{type:Schema.ObjectId,ref :'colaborador',required:false},
    estado:{type:Boolean,default:false,required:true},
    createdAt:{type:Date,default:Date.now,required:true},

})

module.exports = mongoose.model('ciclo_curso', Ciclo_cursoSchema)