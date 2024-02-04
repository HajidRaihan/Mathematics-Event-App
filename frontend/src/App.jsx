import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import DaftarPeserta from "./pages/admin/DaftarPeserta";
import PendaftaranPeserta from "./pages/PendaftaranPeserta";
import PendaftaranInstansi from "./pages/PendaftaranInstansi";
import PendaftaranMahasiswa from "./pages/PendaftaranMahasiswa";
import DaftarMahasiswa from "./pages/admin/DaftarMahasiswa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pendaftaran/siswa" element={<PendaftaranPeserta />} />
        <Route path="/pendaftaran/mahasiswa" element={<PendaftaranMahasiswa />} />
        <Route path="/pendaftaran/instansi" element={<PendaftaranInstansi />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/peserta/siswa" element={<DaftarPeserta />} />
        <Route path="/admin/peserta/mahasiswa" element={<DaftarMahasiswa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
