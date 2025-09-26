// src/routes/figurinos.js
const express = require('express');
const router = express.Router();
const FigurinoController = require('../controllers/figurinoController');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeAdmin = require('../middleware/authorizeAdmin');
const validate = require('../middleware/validateMiddleware');
const { createFigurinoSchema, updateFigurinoSchema } = require('../validators/figurinoValidator');

// Rotas Públicas
router.get('/', FigurinoController.getAll);
router.get('/:id', FigurinoController.getById);

// Rotas Protegidas com Validação
router.post('/',
  authenticateToken,
  authorizeAdmin,
  validate(createFigurinoSchema),
  FigurinoController.create
);

router.put('/:id',
  authenticateToken,
  authorizeAdmin,
  validate(updateFigurinoSchema),
  FigurinoController.update
);

router.delete('/:id', authenticateToken, authorizeAdmin, FigurinoController.delete);

module.exports = router;