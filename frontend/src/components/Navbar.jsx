import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between mx-32 h-20 items-center">
      <div>
        <p>logo</p>
      </div>
      <div className="flex gap-5 uppercase text-primary font-semibold items-center text-sm">
        <a href="">Home</a>
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
          </ul>
        </details>
      </div>
    </nav>
  );
  z``;
};

export default Navbar;
