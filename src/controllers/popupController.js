// src/controllers/popupController.js
const PopupService = require('../services/popupService');

class PopupController {
  static async getAll(req, res) {
    try {
      const popups = await PopupService.findAll();
      res.json(popups);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pop-ups' });
    }
  }

  static async getById(req, res) {
    try {
      const popup = await PopupService.findById(req.params.id);
      if (!popup) {
        return res.status(404).json({ error: 'Pop-up não encontrado' });
      }
      res.json(popup);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pop-up' });
    }
  }

  static async create(req, res) {
    try {
      const novoPopup = await PopupService.create(req.body);
      res.status(201).json(novoPopup);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar pop-up' });
    }
  }

  static async update(req, res) {
    try {
      const popupAtualizado = await PopupService.update(req.params.id, req.body);
      res.json(popupAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar pop-up' });
    }
  }

  static async delete(req, res) {
    try {
      await PopupService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar pop-up' });
    }
  }
}

module.exports = PopupController;