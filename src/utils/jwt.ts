import jwt, { type SignOptions, type JwtPayload } from "jsonwebtoken";
import { ENV } from "../config/env.config.js";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, ENV.secret, {
    expiresIn: ENV.secret_expire,
  } as SignOptions);
};

export const verifyToken = (token: string): string | JwtPayload => {
  return jwt.verify(token, ENV.secret);
};
