import { prisma } from "../../config/prisma.js";
import { generateToken } from "../../utils/jwt.js";
import { comparePassword, hashPassword } from "../../utils/password.js";

export class authService {
  async register(username: string, email: string, password: string) {
    const exist = await prisma.user.findUnique({ where: { email } });
    if (exist) throw new Error("Email already registered");

    const hash = await hashPassword(password);

    const user = await prisma.user.create({
      data: { username: username, email: email, password: hash },
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("invalid credentials");

    const valid = await comparePassword(password, user.password);
    if (!valid) throw new Error("invalid credentials");

    const token = generateToken({ id: user.id, email: user.email });
    return token;
  }
}
