import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>
        <Navbar />
        <div className="mt-20 flex flex-col mx-32 gap-3">
          <p className="text-xl text-white">Halo, Welcom To</p>
          <h1 className="text-[64px] text-white font-bold">MATHEMATICS EVENT</h1>
          <h1 className="text-5xl text-primary font-bold">XXIV</h1>
          <p className="text-white">Lorem ipsum dolor sit amet.</p>
          <p className="max-w-96 text-xs text-white">
            Lorem ipsum dolorsdasdasdasdass sit amet consectetur adipisicing elit. Facere a
            suscipit, quo voluptate iure voluptatum.
          </p>
          <button
            className="w-[300px] text-primary uppercase text-base py-1 bg-white rounded-xl font-semibold"
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
