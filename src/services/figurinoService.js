// src/services/figurinoService.js
const prisma = require('../lib/prisma');

class FigurinoService {
  static async findAll() {
    return await prisma.figurinos.findMany();
  }

  static async findById(id) {
    return await prisma.figurinos.findUnique({ where: { id: parseInt(id) } });
  }

  static async create(data) {
    return await prisma.figurinos.create({ data });
  }

  static async update(id, data) {
    return await prisma.figurinos.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async delete(id) {
    return await prisma.figurinos.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = FigurinoService;