const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
      const popups = await prisma.textos_Pop_ups.findMany();
      res.json(popups);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar textos pop-ups' });
    }
  });  

module.exports = router;