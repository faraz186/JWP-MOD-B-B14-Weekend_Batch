import "dotenv/config";

import express from "express";
import cors from "cors";
import userRoutes from "./router/routes.js";
import { connectDB } from "./database/database.js";
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/faraz", userRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`server is running on http:localhost:${PORT}`);
});
