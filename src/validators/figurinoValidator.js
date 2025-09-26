// src/validators/figurinoValidator.js
const { z } = require('zod');

const figurinoSchema = z.object({
  nome: z.string({
    required_error: 'O nome do figurino é obrigatório.',
  }).min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
  
  descricao: z.string().optional(),
});

module.exports = {
  createFigurinoSchema: figurinoSchema,
  updateFigurinoSchema: figurinoSchema,
};