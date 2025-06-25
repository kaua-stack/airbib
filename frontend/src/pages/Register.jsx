import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // (se não estiver usando, remova esta linha)

export const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/register", {
          name,
          email,
          password,
        });

        setUser(userDoc);

        // Alerta visual
        Swal.fire({
          icon: "success",
          title: "Cadastro realizado!",
          text: "Seja bem-vindo!",
          confirmButtonColor: "#38bdf8",
        });

        navigate("/");
      } catch (error) {
        console.error("Erro ao registrar:", error);
        Swal.fire({
          icon: "error",
          title: "Erro ao cadastrar",
          text:
            error.response?.data?.message ||
            error.message ||
            "Tente novamente mais tarde.",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Preencha todos os campos",
        text: "Nome, e-mail e senha são obrigatórios.",
      });
    }
  };

  return (
    <section className="flex min-h-screen items-center bg-gray-50">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 py-8">
        <h1 className="text-3xl font-bold">Faça seu Cadastro</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome:"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Digite seu e-mail:"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha:"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white"
          >
            Registrar
          </button>

          <p className="text-sm text-gray-600">
            Já tem conta?{" "}
            <Link
              className="text cursor-pointer font-semibold underline"
              to="/login"
            >
              Logue Aqui
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
