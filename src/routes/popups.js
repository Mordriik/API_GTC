// src/routes/popups.js
const express = require('express');
const router = express.Router();
const PopupController = require('../controllers/popupController');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeAdmin = require('../middleware/authorizeAdmin');
const validate = require('../middleware/validateMiddleware');
const { createPopupSchema, updatePopupSchema } = require('../validators/popupValidator');

// Rotas Públicas
router.get('/', PopupController.getAll);
router.get('/:id', PopupController.getById);

// Rotas Protegidas com Validação
router.post('/',
  authenticateToken,
  authorizeAdmin,
  validate(createPopupSchema),
  PopupController.create
);

router.put('/:id',
  authenticateToken,
  authorizeAdmin,
  validate(updatePopupSchema),
  PopupController.update
);

router.delete('/:id', authenticateToken, authorizeAdmin, PopupController.delete);

module.exports = router;