import { z } from 'zod';

// ===== Schema para GET quilomboCards =====

const quilomboCardSchema = z.object({
 foto: z
 .string()
 .url("A foto deve ser uma URL válida"),

  nome: z
    .string()
    .min(3,{
      message:"O nome deve ter mais de 3 caracteres"
    }),

  descricao: z
    .string({ 
      required_error: "A descrição é obrigatória",
      invalid_type_error: 'A descrição deve ser um texto'
    })
});

// ===== Schema para GET quilomboInformações =====

const quilomboInfoSchema = z.object({

  // Seção História
  historia: z.object({
    titulo: z.string().refine(val => val === "História", "Título incorreto"),
    imagem: z.string().url("A foto deve ser uma URL válida"),
    texto: z.string().min(50, "O texto histórico precisa ser mais descritivo.")
  }),

  // Seção Modo de Vida
  modoDeVida: z.object({
    titulo: z.string().refine(val => val === "Modo de Vida", "Título incorreto"),
    imagem: z.string().url("Caminho da imagem inválido ou mal formatado"),
    texto: z.string().min(50, "O texto sobre o modo de vida precisa de mais detalhes.")
  }),
// Seção Cultura
  cultura: z.object({
    titulo: z.string().refine(val => val === "Cultura", "Título incorreto"),
    imagem: z.string().url("Caminho da imagem inválido ou mal formatado"),
    texto: z.string().min(50, "O texto cultural precisa de mais detalhes.")
  }),

  // Seção Questões Enfrentadas (com a lista do Accordion)
  questoesEnfrentadas: z.object({
    titulo: z.string(),
    introducao: z.string(),
    itens: z.array(questaoItemSchema) 
      .min(1, "É necessário listar pelo menos uma questão enfrentada.")
  })
});

// ===== Schema para GET quilomboFontes ======

const quilomboFontesSchema = z.object({

cartao_referencial_1: z
    .string({ 
      required_error: "Senha é obrigatória",
      invalid_type_error: 'A senha deve ser um texto'
    .min(10, "O texto deve ter no mínimo 10 caracteres")
    .max(2000, "O texto deve ter no máximo 2000 caracteres")
    }),

cartao_referencial_2: z
    .string({ 
      required_error: "Senha é obrigatória",
      invalid_type_error: 'A senha deve ser um texto'
    .min(10, "O texto deve ter no mínimo 10 caracteres")
    .max(2000, "O texto deve ter no máximo 2000 caracteres")
    }),

cartao_referencial_3: z
    .string({ 
      required_error: "Senha é obrigatória",
      invalid_type_error: 'A senha deve ser um texto'
    .min(10, "O texto deve ter no mínimo 10 caracteres")
    .max(2000, "O texto deve ter no máximo 2000 caracteres")
    })

});

// ===== Schema para a página de relatos =====



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
  quilomboCardSchema,
  quilomboInfoSchema,
  quilomboFontesSchema,
  loginSchema, 
  validate 
};