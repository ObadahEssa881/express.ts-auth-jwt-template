import jwt from "jsonwebtoken";
import { ENV } from "../config/env.config.js";

export const generateToken = (payload: object) => {
  return jwt.sign(payload, ENV.secret, { expiresIn: ENV.secret_expire });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, ENV.secret);
};
