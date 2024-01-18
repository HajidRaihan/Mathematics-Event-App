import AdminNav from "../../components/AdminNav";

const Dashboard = () => {
  return (
    <div className="flex gap-3">
      <AdminNav />
      <div className="mx-20 mt-10">
        <div className="w-full flex gap-10 items-center p-10 h-32 border rounded-md shadow-xl border-slate-300 mb-5">
          <p className="text-3xl font-semibold">Jumlah Peserta</p>
          <p className="text-3xl font-semibold">|</p>
          <p className="text-3xl font-semibold">100000</p>
        </div>
        <div className="w-full flex gap-10 items-center p-10 h-32 border rounded-md shadow-xl border-slate-300">
          <p className="text-3xl font-semibold">Jumlah sekolah</p>
          <p className="text-3xl font-semibold">|</p>
          <p className="text-3xl font-semibold">100000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
