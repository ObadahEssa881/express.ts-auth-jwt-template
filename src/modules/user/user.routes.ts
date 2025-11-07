// src/modules/user/user.routes.ts
import { Router } from "express";
import { UserController } from "./user.controller.js";
import { authGuard } from "../../middlewares/auth.middleware.js";

const router = Router();
const controller = new UserController();

router.get("/my-data", authGuard, controller.getProfile);

export default router;
