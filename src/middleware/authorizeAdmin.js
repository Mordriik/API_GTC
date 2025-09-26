// src/middleware/authorizeAdmin.js
const prisma = require('../lib/prisma');

async function authorizeAdmin(req, res, next) {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.userId } });

    if (user && user.role === 'ADMIN') {
      next(); // Usuário é admin, pode prosseguir
    } else {
      res.sendStatus(403); // Proibido (Forbidden)
    }
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = authorizeAdmin;