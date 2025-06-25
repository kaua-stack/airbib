import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redireciona para a Home se o usuário já estiver logado
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        alert("Login realizado com sucesso!");
        navigate("/"); // Redireciona para a Home
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert(
          `Deu um erro ao logar: ${
            error.response?.data?.message ||
            error.message ||
            "Erro desconhecido"
          }`,
        );
      }
    } else {
      alert("Você precisa preencher os dados.");
    }
  };

  return (
    <section className="flex min-h-screen items-center bg-gray-50">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 py-8">
        <h1 className="text-3xl font-bold">Faça seu Login</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-[#38bdf8] px-4 py-2 font-bold text-white"
          >
            Login
          </button>

          <p className="text-sm text-gray-600">
            Ainda não tem conta?{" "}
            <Link
              className="text cursor-pointer font-semibold underline"
              to="/register"
            >
              Registre-se aqui!
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
