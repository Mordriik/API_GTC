const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/roteiros-cenarios', async (req, res) => {
    try {
      const relacoes = await prisma.roteiros_Cenários.findMany();
      res.json(relacoes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar vínculo Roteiro-Cenário' });
    }
  });
  
  router.get('/roteiros-figurinos', async (req, res) => {
    try {
      const relacoes = await prisma.roteiros_Figurinos.findMany();
      res.json(relacoes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar vínculo Roteiro-Figurino' });
    }
  });  

module.exports = router;