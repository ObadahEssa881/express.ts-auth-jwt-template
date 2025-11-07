import type { Response } from "express";
import type { authRequest } from "../../middlewares/auth.middleware.js";

export class UserController {
  getProfile(req: authRequest, res: Response) {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id, email } = req.user;

    return res.json({
      message: `weclome user id: ${id} email: ${email}`,
      //   user: { id, email },
    });
  }
}
