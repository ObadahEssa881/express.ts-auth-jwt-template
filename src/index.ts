import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import { ENV } from "./config/env.config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", userRoutes);

app.listen(ENV.port, () => {
  console.log(`Server running at http://localhost:${ENV.port}`);
});
