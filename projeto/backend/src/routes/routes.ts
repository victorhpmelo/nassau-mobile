import { Router } from "express";
import { PasswordController } from "../controllers/passwordController";

export const passwordRoutes = (): Router => {
  const router = Router();
  const controller = new PasswordController();

  router.post("/", controller.create.bind(controller));
  router.get("/", controller.findAll.bind(controller));

  return router;
};

