import type { Request, Response } from "express";
import type { loginDto, registerDto } from "./auth.dto.js";
import { authService } from "./auth.service.js";

const service = new authService();
export class authController {
  async register(req: Request<{}, {}, registerDto>, res: Response) {
    try {
      const { username, email, password } = req.body;
      const data = await service.register(username, email, password);
      res.status(201).json({
        success: true,
        message: "created",
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
  async login(req: Request<{}, {}, loginDto>, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await service.login(email, password);
      res.status(200).json({
        success: true,
        token: data,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}
