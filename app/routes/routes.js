const express = require('express');
const app = express();

app.use(require('../controllers/paises/pais.routes'))

module.exports = app;

