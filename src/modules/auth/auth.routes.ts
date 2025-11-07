import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { loginDto, registerDto } from "./auth.dto.js";

const router = Router();
const controller = new authController();

router.post("/register", validate(registerDto), controller.register);
router.post("/login", validate(loginDto), controller.login);

export default router;
