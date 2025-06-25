import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./models.js";
import bcrypt from "bcryptjs";

const router = Router();

const bcryptSalt = bcrypt.genSaltSync(10); // Melhor informar o valo

router.get("/", async (req, res) => {
  try {
    await connectDb(); // Certifique-se de aguardar a conexão com o banco

    const users = await User.find(); // Busca todos os usuários
    res.json(users); // Retorna os dados como JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await connectDb();

    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt); // Criptografa a senha

    const newUser = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    res.status(201).json(newUser); // Retorna o novo usuário criado
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

router.post("/login", async (req, res) => {
  await connectDb();
  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);
      const { name, _id } = userDoc;

      passwordCorrect
        ? res.json({ name, email, _id })
        : res.status(400).json("senha invalida!!");
    } else {
      res.status(400).json("usuario não encontrado!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
