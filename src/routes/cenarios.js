const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
      const cenarios = await prisma.cenarios.findMany();
      res.json(cenarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cenários' });
    }
  });  

module.exports = router;