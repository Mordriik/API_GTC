// src/controllers/figurinoController.js
const FigurinoService = require('../services/figurinoService');

class FigurinoController {
  static async getAll(req, res) {
    try {
      const figurinos = await FigurinoService.findAll();
      res.json(figurinos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar figurinos' });
    }
  }

  static async getById(req, res) {
    try {
      const figurino = await FigurinoService.findById(req.params.id);
      if (!figurino) {
        return res.status(404).json({ error: 'Figurino não encontrado' });
      }
      res.json(figurino);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar figurino' });
    }
  }

  static async create(req, res) {
    try {
      const novoFigurino = await FigurinoService.create(req.body);
      res.status(201).json(novoFigurino);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar figurino' });
    }
  }

  static async update(req, res) {
    try {
      const figurinoAtualizado = await FigurinoService.update(req.params.id, req.body);
      res.json(figurinoAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar figurino' });
    }
  }

  static async delete(req, res) {
    try {
      await FigurinoService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar figurino' });
    }
  }
}

module.exports = FigurinoController;