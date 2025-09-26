// src/controllers/roteiroController.js
const RoteiroService = require('../services/roteiroService');

class RoteiroController {
  static async getAll(req, res) {
    try {
      const roteiros = await RoteiroService.findAll();
      res.json(roteiros);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar roteiros' });
    }
  }

  static async getById(req, res) {
    try {
      const roteiro = await RoteiroService.findById(req.params.id);
      if (!roteiro) {
        return res.status(404).json({ error: 'Roteiro não encontrado' });
      }
      res.json(roteiro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar roteiro' });
    }
  }

  static async create(req, res) {
    try {
      // O corpo da requisição espera os IDs dos cenários e figurinos
      const novoRoteiro = await RoteiroService.create(req.body);
      res.status(201).json(novoRoteiro);
    } catch (error) {
      //console.error(error); // Apenas para debugar
      res.status(500).json({ error: 'Erro ao criar roteiro' });
    }
  }

  static async update(req, res) {
    try {
      const roteiroAtualizado = await RoteiroService.update(req.params.id, req.body);
      res.json(roteiroAtualizado);
    } catch (error) {
      //console.error(error); // Apenas para debugar
      res.status(500).json({ error: 'Erro ao atualizar roteiro' });
    }
  }

  static async delete(req, res) {
    try {
      await RoteiroService.delete(req.params.id);
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar roteiro' });
    }
  }
}

module.exports = RoteiroController;