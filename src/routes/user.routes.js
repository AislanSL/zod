import { deleted, get, getId, newUser, update } from "../controllers/user.controler.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { createUserSchema, getUsersSchema } from "../validator/user.validator.js"

export const userRoutes = app => {
  app.post('/user', validateSchema(createUserSchema), newUser),
  app.get('/user', get),
  app.get('/user/:id', getUsersSchema, getId),
  app.put('/user/:id', update),
  app.delete('/user/:id', deleted)
}