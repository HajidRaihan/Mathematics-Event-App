import AdminNav from "../../components/AdminNav";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { RequestApi } from "../../helper/RequestApi";

const DaftarLktmn = () => {
  const [dataPeserta, setDataPeserta] = useState();
  const apiUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const getMahasiswa = async () => {
      const res = await RequestApi("GET", `lkti`, {}, {}, "Mencoba Mengambil Data Instansi");

      setDataPeserta(res.data);
      console.log(res.data);
    };
    getMahasiswa();
  }, []);

  const conditionalRowStyles = [
    {
      when: (row) => row.status === "belum lunas",
      style: {
        backgroundColor: "red",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    // You can also pass a callback to style for additional customization
    // {
    //   when: (row) => row.calories < 400,
    //   style: (row) => ({ backgroundColor: row.isSpecial ? "pink" : "inerit" }),
    // },
  ];
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      cell: (row) => <p>{row.id}</p>,
      sortable: true,
    },
    {
      name: "Foto1",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.foto_1}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Foto2",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.foto_2}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Foto3",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.foto_3}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Aktif_1",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.aktif_1}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Aktif_2",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.aktif_2}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Aktif_3",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.aktif_3}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Anggota 1",
      selector: (row) => row.anggota_1,
      cell: (row) => <p>{row.anggota_1}</p>,
    },
    {
      name: "Anggota 2",
      selector: (row) => row.anggota_2,
      cell: (row) => <p>{row.anggota_2}</p>,
    },
    {
      name: "Anggota 3",
      selector: (row) => row.anggota_3,
      cell: (row) => <p>{row.anggota_3}</p>,
    },
    {
      name: "Nim 1",
      selector: (row) => row.nim_1,
      cell: (row) => <p>{row.nim_1}</p>,
    },
    {
      name: "Nim 2",
      selector: (row) => row.nim_2,
      cell: (row) => <p>{row.nim_2}</p>,
    },
    {
      name: "Nim 3",
      selector: (row) => row.nim_3,
      cell: (row) => <p>{row.nim_3}</p>,
    },
    {
      name: "Gender 1",
      selector: (row) => row.jenis_kelamin_1,
      cell: (row) => <p>{row.jenis_kelamin_1}</p>,
    },
    {
      name: "Gender 2",
      selector: (row) => row.jenis_kelamin_2,
      cell: (row) => <p>{row.jenis_kelamin_2}</p>,
    },
    {
      name: "Gender 3",
      selector: (row) => row.jenis_kelamin_3,
      cell: (row) => <p>{row.jenis_kelamin_3}</p>,
    },
    {
      name: "instansi",
      selector: (row) => row.instansi_id,
      cell: (row) => <p>{row.instansi_id}</p>,
    },
    {
      name: "Kontak 1",
      selector: (row) => row.kontak_1,
      cell: (row) => <p>{row.kontak_1}</p>,
    },
    {
      name: "Kontak 2",
      selector: (row) => row.kontak_2,
      cell: (row) => <p>{row.kontak_2}</p>,
    },
    {
      name: "Kontak 3",
      selector: (row) => row.kontak_3,
      cell: (row) => <p>{row.kontak_3}</p>,
    },
    {
      name: "email 1",
      selector: (row) => row.email_1,
      cell: (row) => <p>{row.email_1}</p>,
    },
    {
      name: "email 2",
      selector: (row) => row.email_2,
      cell: (row) => <p>{row.email_2}</p>,
    },
    {
      name: "email 3",
      selector: (row) => row.email_3,
      cell: (row) => <p>{row.email_3}</p>,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      cell: (row) => <p>{row.username}</p>,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => <p>{row.status}</p>,
    },
  ];

  return (
    <div className="flex w-full max-h-screen overflow-x-visible">
      <AdminNav />
      <div className="w-full">
        <DataTable
          columns={columns}
          data={dataPeserta}
          title={`Peserta Mahasiswa | ${dataPeserta?.length}`}
          pagination
          conditionalRowStyles={conditionalRowStyles}
          scrollX
        />
      </div>
    </div>
  );
};

export default DaftarLktmn;
