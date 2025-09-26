// src/controllers/authController.js
const AuthService = require('../services/authService');

class AuthController {
  static async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({ message: 'Usuário criado com sucesso!', userId: user.id });
    } catch (error) {
      res.status(500).json({ error: 'Não foi possível registrar o usuário.' });
    }
  }

  static async login(req, res) {
    try {
      const token = await AuthService.login(req.body);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = AuthController;