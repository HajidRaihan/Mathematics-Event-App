import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import DaftarPeserta from "./pages/admin/DaftarPeserta";
import PendaftaranPeserta from "./pages/PendaftaranPeserta";
import PendaftaranInstansi from "./pages/PendaftaranInstansi";
import PendaftaranMahasiswa from "./pages/PendaftaranMahasiswa";
import DaftarMahasiswa from "./pages/admin/DaftarMahasiswa";
import DaftarInstansi from "./pages/admin/DaftarInstansi";
import PendaftaranLkti from "./pages/PendaftaranLkti";
import DaftarLktmn from "./pages/admin/DaftarLktmn";
// import Pengumuman from "./pages/Pengumuman";

// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pendaftaran/siswa" element={<PendaftaranPeserta />} />
        <Route path="/pendaftaran/mahasiswa" element={<PendaftaranMahasiswa />} />
        <Route path="/pendaftaran/lkti" element={<PendaftaranLkti />} />
        <Route path="/pendaftaran/instansi" element={<PendaftaranInstansi />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/peserta/siswa" element={<DaftarPeserta />} />
        <Route path="/admin/peserta/mahasiswa" element={<DaftarMahasiswa />} />
        <Route path="/admin/peserta/lktmn" element={<DaftarLktmn />} />
        <Route path="/admin/instansi" element={<DaftarInstansi />} />
        {/* <Route path="/pengumuman" element={<Pengumuman />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
