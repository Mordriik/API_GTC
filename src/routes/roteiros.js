const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const roteiros = await prisma.roteiros.findMany();
    res.json(roteiros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar roteiros' });
  }
});

module.exports = router;