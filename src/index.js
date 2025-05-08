// src/index.js
const express = require('express');
const cors = require('cors');

const roteiroRoutes = require('./routes/roteiros');
const cenarioRoutes = require('./routes/cenarios');
const figurinoRoutes = require('./routes/figurinos');
const popupRoutes = require('./routes/popups');
const vinculoRoutes = require('./routes/vinculos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/roteiros', roteiroRoutes);
app.use('/cenarios', cenarioRoutes);
app.use('/figurinos', figurinoRoutes);
app.use('/popups', popupRoutes);
app.use('/vinculos', vinculoRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});