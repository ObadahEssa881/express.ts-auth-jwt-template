import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ENV } from "../config/env.config.js";
import type { jwtPayload } from "../types/jwt-payload.js";
import { verifyToken } from "../utils/jwt.js";

export interface authRequest extends Request {
  user?: jwtPayload;
}

export const authGuard = (
  req: authRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const token = header.split(" ")[1];
    if (!ENV.secret) throw new Error("JWT secret not configured");
    const decode = verifyToken(token!);
    req.user = decode;
    next();
  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
