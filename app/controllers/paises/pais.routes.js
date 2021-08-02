const express = require('express');
const app = express();
const { GetPaises, NewPais } = require('./pais');

async function getPaises(req,res) {
    try {
        let respuesta = await GetPaises();
        res.send(respuesta);

        
    } catch (e) {
        res.send("Error en la busqueda de paises");
    }
}

async function newPais(req,res) {
    try {
        let pais = req.body;
        let respuesta = await NewPais(pais);
        res.send(respuesta);

        
    } catch (e) {
        res.send("Error en la busqueda de paises");
    }
}

//get
app.get("/api/paises", getPaises);

//post
app.get("/api/paises", newPais);

module.exports = app;