import express from "express";
import "dotenv/config";
import UserRoutes from "./domains/users/routes.js";
import cors from "cors";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use("/users", UserRoutes);

/**
 * Iniciando o servidor
 */
app.listen(PORT, () => {
  console.log(`SERVIDOR ESTÁ RODANDO NA PORTA ${PORT}`);
});
