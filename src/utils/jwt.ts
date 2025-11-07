import jwt, { type SignOptions } from "jsonwebtoken";
import { ENV } from "../config/env.config.js";
import type { jwtPayload } from "../types/jwt-payload.js";

export const generateToken = (payload: jwtPayload): string => {
  return jwt.sign(payload, ENV.secret, {
    expiresIn: ENV.secret_expire,
  } as SignOptions);
};

export const verifyToken = (token: string): jwtPayload => {
  const decoded = jwt.verify(token, ENV.secret);
  return decoded as jwtPayload;
};
