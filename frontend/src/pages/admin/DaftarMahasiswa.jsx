import AdminNav from "../../components/AdminNav";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { RequestApi } from "../../helper/RequestApi";
import ChangeStatusModal from "../../components/ChangeStatusModal";
import EditIcon from "../../../src/assets/edit-icon.svg";

const DaftarMahasiswa = () => {
  const [dataPeserta, setDataPeserta] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState();

  const apiUrl = "https://apiregister.mathevent-unhas.com/api";

  useEffect(() => {
    const getMahasiswa = async () => {
      const res = await RequestApi("GET", `mahasiswa`, {}, {}, "Mencoba Mengambil Data Instansi");

      setDataPeserta(res.data);
      console.log(res.data);
    };
    getMahasiswa();
  }, []);

  const openModalHandler = (id) => {
    setOpenModal(true);
    setSelectedId(id);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

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
      name: "Akitif_1",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.aktif_1}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Akitif_2",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.aktif_2}`}
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
      name: "Username",
      selector: (row) => row.username,
      cell: (row) => <p>{row.username}</p>,
    },
    {
      name: "password",
      selector: (row) => row.password,
      cell: (row) => <p>{row.password}</p>,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <div className="flex gap-3">
          <p>{row.status}</p>
          <img
            src={EditIcon}
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={() => openModalHandler(row.id)}
          />

          {openModal && (
            <ChangeStatusModal close={closeModalHandler} id={selectedId} url="mahasiswa" />
          )}
        </div>
      ),
      sortable: true,
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

export default DaftarMahasiswa;
