// src/routes/cenarios.js
const express = require('express');
const router = express.Router();
const CenarioController = require('../controllers/cenarioController');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeAdmin = require('../middleware/authorizeAdmin');
const validate = require('../middleware/validateMiddleware');
const { createCenarioSchema, updateCenarioSchema } = require('../validators/cenarioValidator');

// Rotas Públicas
router.get('/', CenarioController.getAll);
router.get('/:id', CenarioController.getById);

// Rotas Protegidas com Validação
router.post('/',
  authenticateToken,
  authorizeAdmin,
  validate(createCenarioSchema),
  CenarioController.create
);

router.put('/:id',
  authenticateToken,
  authorizeAdmin,
  validate(updateCenarioSchema),
  CenarioController.update
);

router.delete('/:id', authenticateToken, authorizeAdmin, CenarioController.delete);

module.exports = router;