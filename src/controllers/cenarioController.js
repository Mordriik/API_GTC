// src/controllers/cenarioController.js
const CenarioService = require('../services/cenarioService');

class CenarioController {
  static async getAll(req, res) {
    try {
      const cenarios = await CenarioService.findAll();
      res.json(cenarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cenários' });
    }
  }

  static async getById(req, res) {
    try {
      const cenario = await CenarioService.findById(req.params.id);
      if (!cenario) {
        return res.status(404).json({ error: 'Cenário não encontrado' });
      }
      res.json(cenario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar cenário' });
    }
  }

  static async create(req, res) {
    try {
      const novoCenario = await CenarioService.create(req.body);
      res.status(201).json(novoCenario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar cenário' });
    }
  }

  static async update(req, res) {
    try {
      const cenarioAtualizado = await CenarioService.update(req.params.id, req.body);
      res.json(cenarioAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar cenário' });
    }
  }

  static async delete(req, res) {
    try {
      await CenarioService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar cenário' });
    }
  }
}

module.exports = CenarioController;