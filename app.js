require('./app/config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(require('./app/routes/routes'));


mongoose.connect(process.env.Mongo,{
    useNewUrlParser:true,
    useUnifiedTopology: true

}).then(resp=>{
    console.log("conexión realizada correctamente");
}).catch(resp=>{
    console.log("Error en la conexión");
})

app.listen(PORT,()=>{
    console.log(`Servidor en ejecución en puerto: ${PORT}`);
})