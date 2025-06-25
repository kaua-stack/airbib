import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo Airbnb com texto azul */}
        <Link to="/" className="flex flex-shrink-0 items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            alt="Airbnb Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Barra de busca */}
        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex max-w-lg cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-4 py-2 shadow-md transition hover:shadow-lg">
            <span className="px-3 py-1 text-sm font-semibold text-gray-700">
              Qualquer lugar
            </span>
            <div className="h-6 w-px bg-gray-300" />
            <span className="px-3 py-1 text-sm font-semibold text-gray-700">
              Qualquer semana
            </span>
            <div className="h-6 w-px bg-gray-300" />
            <span className="px-3 py-1 text-sm text-gray-400">
              Adicionar hóspedes
            </span>
            <button className="ml-2 rounded-full bg-[#38bdf8] p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu perfil/login com ícones em azul */}
        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 shadow-md transition hover:shadow-lg"
        >
          {/* Ícone menu hamburguer azul */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#38bdf8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* Ícone usuário azul */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#38bdf8"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          {user && (
            <span className="max-w-[100px] truncate text-sm font-medium text-[#38bdf8] sm:max-w-xs">
              {user.name || user.email}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
