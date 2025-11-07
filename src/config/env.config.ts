import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  host: process.env.APP_HOST as string || "localhost",
  secret: process.env.AUTH_SECRET as string,
  secret_expire: process.env.AUTH_SECRET_EXPIRES_IN as string || '15m',
  DATABASE_URL: process.env.DATABASE_URL,
  port: parseInt(process.env.APP_PORT as string)|| 3000,
};


