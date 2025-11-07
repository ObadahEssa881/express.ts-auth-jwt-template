import type { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validate =
  (Schema: z.ZodType<any, any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      Schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: `validation failed ||| ${error.message}`,
        error: error.errors,
      });
    }
  };
