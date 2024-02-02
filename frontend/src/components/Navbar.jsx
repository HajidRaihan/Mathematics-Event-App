const Navbar = () => {
  return (
    <nav className="flex justify-between mx-32 h-20 items-center">
      <div>
        <p>logo</p>
      </div>
      <div className="flex gap-5 uppercase text-primary font-semibold items-center">
        <a href="">Home</a>
        <a href="">Pengumuman</a>
        <details className="dropdown">
          <summary className="m-1 bg-white px-5 py-1 cursor-pointer rounded-md">
            Pendaftaran
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 bg-white">
            <li>
              <a href="/pendaftaran-peserta">SMA</a>
            </li>
            <li>
              <a>Mahasiswa</a>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
