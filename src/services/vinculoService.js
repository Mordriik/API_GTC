const prisma = require('../lib/prisma');
class VinculoService {
  static async findRoteiroCenario() { return await prisma.roteirocenario.findMany(); [cite_start]} // Nome do modelo [cite: 2, 4, 5]
  static async findRoteiroFigurino() { return await prisma.roteirofigurino.findMany(); [cite_start]} // Nome do modelo [cite: 3, 6, 7]
}
module.exports = VinculoService;