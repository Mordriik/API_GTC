const VinculoService = require('../services/vinculoService');
class VinculoController {
  static async getRoteiroCenario(req, res) {
    try { const relacoes = await VinculoService.findRoteiroCenario(); res.json(relacoes); } 
    catch (error) { res.status(500).json({ error: 'Erro ao buscar vínculo Roteiro-Cenário' }); }
  }
  static async getRoteiroFigurino(req, res) {
    try { const relacoes = await VinculoService.findRoteiroFigurino(); res.json(relacoes); } 
    catch (error) { res.status(500).json({ error: 'Erro ao buscar vínculo Roteiro-Figurino' }); }
  }
}
module.exports = VinculoController;