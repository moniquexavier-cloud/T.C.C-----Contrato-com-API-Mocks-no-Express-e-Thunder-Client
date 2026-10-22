const { z } = require('zod');

// Schema para POST /api/auth/login
const loginSchema = z.object({
     email: z
    .string({
      required_error: 'O e-mail é obrigatório',
      invalid_type_error: 'O e-mail deve ser um texto' 
    })
    .email({ message: 'Forneça um formato de e-mail válido' }),
    senha: z
    .string({ 
      required_error: "Senha é obrigatória",
      invalid_type_error: 'A senha deve ser um texto'
    })
});

// Schema para POST /api/relatos
const criarRelatoSchema = z.object({
    quilombo_id: z
    .number({ required_error: "quilombo_id é obrigatório" }).int(),
    texto: z
    .string({ required_error: "Texto é obrigatório" })
    .min(10, "O texto deve ter no mínimo 10 caracteres")
    .max(2000, "O texto deve ter no máximo 2000 caracteres")
});

// Schema para PATCH /api/relatos/:id
const atualizarRelatoSchema = z.object({
  texto: z
    .string({ required_error: "Texto é obrigatório" })
    .min(10, "O texto deve ter no mínimo 10 caracteres")
    .max(2000, "O texto deve ter no máximo 2000 caracteres")
});

// Schema para DELETE /api/relatos/:id
const deleteRelatoSchema = z.object({
  id: z
  .string()
  .regex(/^\d+$/, "O ID deve ser um número inteiro válido")
});

// Middleware genérico para aplicar o Zod nas requisições
const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ 
      mensagem: "Erro de validação nos dados enviados", 
      erros: result.error.errors 
    });
  }
  next();
};
module.exports = { 
  loginSchema, 
  criarRelatoSchema, 
  atualizarRelatoSchema,
  deleteRelatoSchema,
  validate 
};