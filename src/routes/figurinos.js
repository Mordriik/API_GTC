const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
      const figurinos = await prisma.figurinos.findMany();
      res.json(figurinos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar figurinos' });
    }
  });  

module.exports = router;