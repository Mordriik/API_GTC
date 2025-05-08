const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const cenarios = await prisma.cenarios.findMany();
  res.json(cenarios);
});

module.exports = router;