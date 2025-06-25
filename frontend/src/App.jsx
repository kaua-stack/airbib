import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register"; // ✅ IMPORTAÇÃO
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// ✅ Configura base da API
axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/register" element={<Register setUser={setUser} />} />{" "}
        {/* ✅ CORRIGIDO */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
