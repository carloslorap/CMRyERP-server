const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const { connectDB } = require('./config/db')
const colaborador_router = require('./routes/colaborador.js')
const cliente_router = require('./routes/cliente.js')
const prospeccion_router = require('./routes/prospeccion.js')
const curso_router = require('./routes/curso.js')
const matricula_router = require('./routes/matricula.js')
const pago_router = require('./routes/pago.js')
const producto_router = require('./routes/Producto.js')
const venta_router = require('./routes/Venta.js')
const configuracion_router = require('./routes/configuracion.js')
const email_router = require('./routes/email.js')
const kpi_router = require('./routes/kpi.js')

dotenv.config()
const app = express() 
app.use(express.json()); 

connectDB() 

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{  
    console.log(`Server running at http://localhost:${PORT}`)
})   
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use(bodyparser.urlencoded({limit: '50mb', extended:true}))
app.use(bodyparser.json({limit: '50mb', extended:true}))  




 
app.use('/api',colaborador_router)
app.use('/api',cliente_router)
app.use('/api',prospeccion_router)
app.use('/api',curso_router)
app.use('/api',matricula_router)
app.use('/api',pago_router)
app.use('/api',producto_router)
app.use('/api',venta_router)
app.use('/api',configuracion_router)
app.use('/api',email_router)
app.use('/api',kpi_router)