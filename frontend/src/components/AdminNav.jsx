import DashboardIcon from "../assets/dashboard-icon.svg";
import SchoolIcon from "../assets/school-icon.svg";
import PesertaIcon from "../assets/peserta-icon.svg";

const AdminNav = () => {
  return (
    <aside className="w-52 min-w-52 shadow-xl h-screen p-5 flex flex-col gap-3 bg-white">
      <div className="flex items-center gap-2">
        <img src={DashboardIcon} alt="dashboardicon" className="h-5  w-5" />
        <p className="text-primary text-sm  font-semibold">Dashboard</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={SchoolIcon} alt="dashboardicon" className="h-5  w-5" />
        <p className="text-primary text-sm font-semibold">Daftar Peserta</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={PesertaIcon} alt="dashboardicon" className="h-5  w-5" />
        <p className="text-primary text-sm font-semibold">Daftar Sekolah</p>
      </div>
    </aside>
  );
};

export default AdminNav;
