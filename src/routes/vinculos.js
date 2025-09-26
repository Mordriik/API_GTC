const express = require('express');
const router = express.Router();
const VinculoController = require('../controllers/vinculoController');
router.get('/roteiros-cenarios', VinculoController.getRoteiroCenario);
router.get('/roteiros-figurinos', VinculoController.getRoteiroFigurino);
module.exports = router;