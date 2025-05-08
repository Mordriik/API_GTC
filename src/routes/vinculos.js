const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/roteiros-cenarios', async (req, res) => {
  const relacoes = await prisma.roteiros_Cenários.findMany();
  res.json(relacoes);
});

router.get('/roteiros-figurinos', async (req, res) => {
  const relacoes = await prisma.roteiros_Figurinos.findMany();
  res.json(relacoes);
});

module.exports = router;