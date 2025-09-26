// src/middleware/validateMiddleware.js
const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    // Se a validação falhar, retorna um erro 400 com os detalhes
    return res.status(400).json({
      error: 'Dados de entrada inválidos.',
      details: error.errors,
    });
  }
};

module.exports = validate;