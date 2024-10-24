import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string()
      .min(1, { message: "O nome de usuário deve ter pelo menos 1 caracteres" })
      .regex(/^[a-zA-Zà-úÀ-Ú\s]+$/, { message: "O nome de usuário só pode conter letras, números e underscores" }),
    email: z.string().email({ message: "Email inválido" }),
    age: z.number().min(18, { message: "Você deve ter pelo menos 18 anos" }).max(100, { message: "A idade máxima é 100 anos" }),
    role: z.enum(['ADMIN', 'USER', 'GUEST']),
    isActive: z.boolean(),
    birthDate: z.string().refine(value => !isNaN(Date.parse(value)), {
      message: "Data de nascimento inválida. Formato correto YYY-MM-DD",
    }),
    password: z.string()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }) 
      .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" }) 
      .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número" }) 
      .regex(/[\W_]/, { message: "A senha deve conter pelo menos um caractere especial" }),
  }).strict();

export const getUsersSchema = (req, res, next) => {
  const schema =  z.object ({
    id: z.string().cuid({ message: "ID inválido. Deve ser um UUID válido."})
  })

  try{ 
    schema.parse(req.params);
    next()
  } catch(erro) {
    if (erro instanceof z.ZodError) {
      return res.status(400).json({
        erro: erro.errors.map(err => ({
          path: err.path,
          message: err.message
        }))
      });
    }
    next(erro); 
  }
}

  





  


