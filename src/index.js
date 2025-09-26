// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importação das rotas
const roteiroRoutes = require('./routes/roteiros');
const cenarioRoutes = require('./routes/cenarios');
const figurinoRoutes = require('./routes/figurinos');
const popupRoutes = require('./routes/popups');
const vinculoRoutes = require('./routes/vinculos');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Rota de verificação de saúde (Health Check)
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API do GTC está no ar!' });
});

// Registro das rotas
app.use('/auth', authRoutes);
app.use('/roteiros', roteiroRoutes);
app.use('/cenarios', cenarioRoutes);
app.use('/figurinos', figurinoRoutes);
app.use('/popups', popupRoutes);
app.use('/vinculos', vinculoRoutes);

// Middleware de tratamento de erros (opcional)
app.use((err, req, res, next) => {
  //console.error(err.stack);
  res.status(500).send({ error: 'Algo deu errado!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  //console.log(`Servidor rodando na porta ${PORT}`);
});