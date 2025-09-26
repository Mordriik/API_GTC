// src/services/cenarioService.js
const prisma = require('../lib/prisma');

class CenarioService {
  static async findAll() {
    return await prisma.cenarios.findMany();
  }

  static async findById(id) {
    return await prisma.cenarios.findUnique({ where: { id: parseInt(id) } });
  }

  static async create(data) {
    return await prisma.cenarios.create({ data });
  }

  static async update(id, data) {
    return await prisma.cenarios.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async delete(id) {
    return await prisma.cenarios.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = CenarioService;