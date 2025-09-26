const express = require('express');
const router = express.Router();
const RoteiroController = require('../controllers/roteiroController');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeAdmin = require('../middleware/authorizeAdmin');

// Importa o middleware e o schema de validação
const validate = require('../middleware/validateMiddleware');
const { createRoteiroSchema, updateRoteiroSchema } = require('../validators/roteiroValidator');

// Rotas Públicas
router.get('/', RoteiroController.getAll);
router.get('/:id', RoteiroController.getById);

// Rotas Protegidas com Validação
router.post('/', 
  authenticateToken, 
  authorizeAdmin, 
  validate(createRoteiroSchema),
  RoteiroController.create
);

router.put('/:id', 
  authenticateToken, 
  authorizeAdmin, 
  validate(updateRoteiroSchema),
  RoteiroController.update
);

router.delete('/:id', authenticateToken, authorizeAdmin, RoteiroController.delete);

module.exports = router;