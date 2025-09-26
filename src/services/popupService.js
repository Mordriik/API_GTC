// src/services/popupService.js
const prisma = require('../lib/prisma');

class PopupService {
  static async findAll() {
    return await prisma.textospopups.findMany();
  }

  static async findById(id) {
    return await prisma.textospopups.findUnique({ where: { id: parseInt(id) } });
  }

  static async create(data) {
    return await prisma.textospopups.create({ data });
  }

  static async update(id, data) {
    return await prisma.textospopups.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  static async delete(id) {
    return await prisma.textospopups.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = PopupService;