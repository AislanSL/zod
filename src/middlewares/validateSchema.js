import { z } from "zod";

export const validateSchema = (schema) => (req, res, next) => {
  try{
    schema.parse(req.body);
    next();
  }catch(erro) {
    if( erro instanceof z.ZodError) {
      return res.status(400).json({
        erro: erro.errors.map(err => ({
          path: err.path,
          message: err.message
      }))
    });
  }
    next(erro);
  }
};