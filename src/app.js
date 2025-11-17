// src/app.js
const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas da aplicação
app.use('/api', routes);

// Rota simples para teste rápido
app.get('/', (req, res) => {
  res.json({ message: 'SGHSS API - Agendamento de Consultas' });
});

module.exports = app;
