const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const figurinos = await prisma.figurinos.findMany();
  res.json(figurinos);
});

module.exports = router;