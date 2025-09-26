// src/services/roteiroService.js
const prisma = require('../lib/prisma');

class RoteiroService {
  static async findAll() {
    // Incluí-se os dados relacionados para que a resposta já venha completa
    return await prisma.roteiros.findMany({
      include: {
        roteirocenario: { include: { cenarios: true } },
        roteirofigurino: { include: { figurinos: true } },
      },
    });
  }

  static async findById(id) {
    return await prisma.roteiros.findUnique({
      where: { id: parseInt(id) },
      include: {
        roteirocenario: { include: { cenarios: true } },
        roteirofigurino: { include: { figurinos: true } },
      },
    });
  }

  static async create(data) {
    const { titulo, descricao, texto, cenarioIds, figurinoIds } = data;

    // Prepara os dados para o Prisma conectar as relações
    const roteiroData = {
      titulo,
      descricao,
      texto,
      roteirocenario: {
        create: cenarioIds?.map(id => ({ cenario_id: id })) || [],
      },
      roteirofigurino: {
        create: figurinoIds?.map(id => ({ figurino_id: id })) || [],
      },
    };

    return await prisma.roteiros.create({
      data: roteiroData,
    });
  }

  static async update(id, data) {
    const { titulo, descricao, texto, cenarioIds, figurinoIds } = data;

    // Primeiro, remove-se os vínculos antigos para depois criar os novos
    await prisma.roteirocenario.deleteMany({ where: { roteiro_id: parseInt(id) } });
    await prisma.roteirofigurino.deleteMany({ where: { roteiro_id: parseInt(id) } });
    
    const roteiroData = {
      titulo,
      descricao,
      texto,
      roteirocenario: {
        create: cenarioIds?.map(id => ({ cenario_id: id })) || [],
      },
      roteirofigurino: {
        create: figurinoIds?.map(id => ({ figurino_id: id })) || [],
      },
    };

    return await prisma.roteiros.update({
      where: { id: parseInt(id) },
      data: roteiroData,
    });
  }

  static async delete(id) {
    // A deleção em cascata definida no schema.prisma já remove os vínculos
    return await prisma.roteiros.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = RoteiroService;