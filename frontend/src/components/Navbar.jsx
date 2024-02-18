import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between md:mx-32 mx-5 h-20 items-center">
      <div>
        <img src={Logo} alt="" className="w-20 h-20" />
      </div>
      <div className="flex gap-5 uppercase text-primary font-semibold items-center text-sm">
        <a href="">Pengumuman</a>
        <details className="dropdown">
          <summary className="m-1 bg-white px-5 py-1 cursor-pointer rounded-md">
            Pendaftaran
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 bg-white">
            <li>
              <Link to={"/pendaftaran/instansi"}>Instansi</Link>
            </li>
            <li>
              <Link to={"/pendaftaran/siswa"}>SMA</Link>
            </li>
            <li>
              <Link to={"/pendaftaran/mahasiswa"}>Mahasiswa</Link>
            </li>
            <li>
              <Link to={"/pendaftaran/lkti"}>LKTMN</Link>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
  z``;
};

export default Navbar;
