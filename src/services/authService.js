// src/services/authService.js
const prisma = require('../lib/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
  static async register(data) {
    const { email, password, name } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });
  }

  static async login(credentials) {
    const { email, password } = credentials;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return token;
  }
}

module.exports = AuthService;