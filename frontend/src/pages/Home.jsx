import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const getInstansi = async () => {
      await axios.get("http://127.0.0.1:8000/api/instansi/1").then((result) => {
        console.log(result.data.data);
      });
    };
    getInstansi();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="background-main min-h-screen">
      <Navbar />
      <div className="max-w-[800px]">
        <div className="mt-10 flex flex-col mx-32 gap-3">
          <p className="text-xl text-white">Halo, Welcom To</p>
          <h1 className="text-5xl text-white font-bold">MATHEMATICS EVENT</h1>
          <h1 className="text-5xl text-primary font-bold">XXIV</h1>
          <p className="text-white text-lg font-semibold tracking-widest">
            “ Mathematics Beyond Limits: Membuka Petualangan Matematika, Temukan Keajaiban dalam
            Angka ”
          </p>
          <p className="text-sm text-white">
            Mathematics Event adalah kompetisi matematika tahunan yang diadakan oleh Himpunan
            Mahasiswa Matematika Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas
            Hasanuddin (Himatika FMIPA Unhas) sebagai wadah untuk mengembangkan kualitas sumber daya
            manusia dalam berpikir kritis dengan ilmu matematika. Mathematics Event merupakan
            kegiatan rutin dalam bentuk kompetisi matematika sebagai bentuk peran aktif Himatika
            FMIPA Unhas dalam mencerdaskan generasi Indonesia.
          </p>
          <button
            className="w-[300px] text-primary uppercase text-base py-1 bg-white rounded-lg font-semibold mt-5"
            onClick={() => navigate("/pendaftaran-peserta")}
          >
            Pendaftaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
