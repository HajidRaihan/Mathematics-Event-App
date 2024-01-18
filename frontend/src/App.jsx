import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import Pendaftaran from "./pages/Pendaftaran";
import DaftarPeserta from "./pages/admin/DaftarPeserta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pendaftaran-peserta" element={<Pendaftaran />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/peserta" element={<DaftarPeserta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
