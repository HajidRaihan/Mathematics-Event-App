import DashboardIcon from "../assets/dashboard-icon.svg";
import SchoolIcon from "../assets/school-icon.svg";
import PesertaIcon from "../assets/peserta-icon.svg";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();
  return (
    <aside className="w-52 min-w-52 shadow-xl h-screen p-5 flex flex-col gap-3 bg-white">
      <div className="flex items-center gap-2" onClick={() => navigate("/admin/peserta")}>
        <img src={DashboardIcon} alt="dashboardicon" className="h-5  w-5" />
        <p className="text-primary text-xs  font-semibold">Dashboard</p>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/admin/peserta/siswa")}
      >
        <img src={PesertaIcon} alt="dashboardicon" className="h-5 w-5 " />
        <p className="text-primary text-xs font-semibold">Daftar Peserta SMA</p>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer
"
        onClick={() => navigate("/admin/peserta/mahasiswa")}
      >
        <img src={PesertaIcon} alt="dashboardicon" className="h-5 w-5 " />
        <p className="text-primary text-xs font-semibold">Daftar Peserta Mahasiswa</p>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/admin/instansi")}
      >
        <img src={SchoolIcon} alt="dashboardicon" className="h-5 w-5 " />
        <p className="text-primary text-xs font-semibold">Daftar instansi</p>
      </div>
    </aside>
  );
};

export default AdminNav;
