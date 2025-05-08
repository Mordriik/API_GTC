const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const popups = await prisma.textos_Pop_ups.findMany();
  res.json(popups);
});

module.exports = router;