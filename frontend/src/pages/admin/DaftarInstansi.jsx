import AdminNav from "../../components/AdminNav";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { RequestApi } from "../../helper/RequestApi";

const DaftarInstansi = () => {
  const [dataInstansi, setDataInstansi] = useState();
  useEffect(() => {
    const getInstansi = async () => {
      const res = await RequestApi("GET", `instansi`, {}, {}, "Mencoba Mengambil Data Instansi");

      setDataInstansi(res.data);
      console.log(res.data);
    };
    getInstansi();
  }, []);
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      cell: (row) => <p>{row.id}</p>,
      sortable: true,
    },
    {
      name: "Instansi",
      selector: (row) => row.instansi,
      cell: (row) => <p>{row.instansi}</p>,
    },
    {
      name: "jenjang",
      selector: (row) => row.jenjang,
      cell: (row) => <p>{row.jenjang}</p>,
    },
    {
      name: "provinsi",
      selector: (row) => row.provinsi,
      cell: (row) => <p>{row.provinsi}</p>,
    },
    {
      name: "kota/kabupaten",
      selector: (row) => row["kota/kabupaten"],
      cell: (row) => <p>{row["kota/kabupaten"]}</p>,
    },
    {
      name: "alamat",
      selector: (row) => row.alamat,
      cell: (row) => <p>{row.alamat}</p>,
    },
    {
      name: "kontak_pendamping",
      selector: (row) => row.kontak_pendamping,
      cell: (row) => <p>{row.kontak_pendamping}</p>,
    },
    {
      name: "email_pendamping",
      selector: (row) => row.email_pendamping,
      cell: (row) => <p>{row.email_pendamping}</p>,
    },
  ];

  return (
    <div className="flex w-full max-h-screen overflow-x-visible">
      <AdminNav />
      <div className="w-full max-h-screen">
        <DataTable
          title={`Daftar Instansi | ${dataInstansi?.length}`}
          columns={columns}
          data={dataInstansi}
          pagination
          scrollX
        />
      </div>
    </div>
  );
};

export default DaftarInstansi;
