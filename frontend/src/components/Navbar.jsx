const Navbar = () => {
  return (
    <nav className="flex justify-between mx-32 h-20 items-center">
      <div>
        <p>logo</p>
      </div>
      <div className="flex gap-5 uppercase text-primary font-semibold">
        <a href="">Home</a>
        <a href="">Pengumuman</a>
        <a href="">pendaftaran</a>
      </div>
    </nav>
  );
};

export default Navbar;
