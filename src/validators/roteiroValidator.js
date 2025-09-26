const { z } = require('zod');

// Regras para a criação de um novo roteiro
const createRoteiroSchema = z.object({
  titulo: z.string({
    required_error: 'O título é obrigatório.',
    invalid_type_error: 'O título deve ser um texto.',
  }).min(3, { message: 'O título deve ter no mínimo 3 caracteres.' }),
  
  descricao: z.string({
    invalid_type_error: 'A descrição deve ser um texto.',
  }).optional(), // optional() significa que o campo não é obrigatório
  
  texto: z.string({
    required_error: 'O texto do roteiro é obrigatório.',
  }).min(1, { message: 'O texto do roteiro não pode estar vazio.' }),

  cenarioIds: z.array(z.number({
    invalid_type_error: 'Cada ID de cenário deve ser um número.',
  })).optional(),

  figurinoIds: z.array(z.number({
    invalid_type_error: 'Cada ID de figurino deve ser um número.',
  })).optional(),
});

const updateRoteiroSchema = createRoteiroSchema;

module.exports = {
  createRoteiroSchema,
  updateRoteiroSchema,
};