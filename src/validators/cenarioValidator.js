// src/validators/cenarioValidator.js
const { z } = require('zod');

const cenarioSchema = z.object({
  nome: z.string({
    required_error: 'O nome do cenário é obrigatório.',
  }).min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
  
  descricao: z.string().optional(),
});

module.exports = {
  createCenarioSchema: cenarioSchema,
  updateCenarioSchema: cenarioSchema,
};