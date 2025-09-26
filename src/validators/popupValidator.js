// src/validators/popupValidator.js
const { z } = require('zod');

const popupSchema = z.object({
  termo: z.string({
    required_error: 'O termo é obrigatório.',
  }).min(1, { message: 'O termo não pode estar vazio.' }),
  
  explicacao: z.string({
    required_error: 'A explicação é obrigatória.',
  }).min(1, { message: 'A explicação não pode estar vazia.' }),
});

module.exports = {
  createPopupSchema: popupSchema,
  updatePopupSchema: popupSchema,
};