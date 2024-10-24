import { userRoutes } from "./user.routes.js";

export const routes = app => (
  userRoutes(app)
);

