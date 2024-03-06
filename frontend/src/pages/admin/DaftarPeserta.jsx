import AdminNav from "../../components/AdminNav";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { RequestApi } from "../../helper/RequestApi";
import ChangeStatus from "../../components/ChangeStatus";
import EditIcon from "../../../src/assets/edit-icon.svg";
import ChangeStatusModal from "../../components/ChangeStatusModal";
import PdfViewer from "../../components/PdfViewer";

const DaftarPeserta = () => {
  const [dataPeserta, setDataPeserta] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [pdfData, setPdfData] = useState();

  const apiUrl = import.meta.env.VITE_BASE_URL;

  console.log(apiUrl);

  const openModalHandler = (id) => {
    setOpenModal(true);
    setSelectedId(id);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  function generateRandomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Example usage:
  const randomString = generateRandomString(8); // Generates a random string of length 10
  console.log(randomString);

  useEffect(() => {
    const getSiswa = async () => {
      const res = await RequestApi("GET", `siswa`, {}, {}, "Mencoba Mengambil Data Instansi");

      setDataPeserta(res.data);
      const pdfBlob = new Blob(res.data, { type: "application/pdf" });
      setPdfData(pdfBlob);
      console.log(res.data);
      console.log("lasdalkjs", pdfData);
    };
    getSiswa();
  }, []);

  const conditionalRowStyles = [
    {
      when: (row) => row.status === "belum lunas",
      style: {
        backgroundColor: "red",
        color: "white",
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
      name: "rapor",
      selector: (row) => row.password,
      innerWidth: "200px",
      cell: (row) => (
        <>
          <a href={`${apiUrl}/${row.rapor}`} target="_blank" className="text-blue-500">
            download pdf
          </a>
          {/* <PdfViewer dataPeserta={row.rapor} /> */}
        </>
      ),
    },
    {
      name: "Foto",
      selector: (row) => (
        <img
          src={`${apiUrl}/${row.foto}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3 object-cover object-center"
        />
      ),
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
      cell: (row) => <p>{row.nama}</p>,
    },
    {
      name: "NISN",
      selector: (row) => row.nisn,
      cell: (row) => <p>{row.nisn}</p>,
    },
    {
      name: "Gender",
      selector: (row) => row.jenis_kelamin,
      cell: (row) => <p>{row.jenis_kelamin}</p>,
    },
    {
      name: "Sekolah",
      selector: (row) => row.instansi_id,
      cell: (row) => <p>{row.instansi_id}</p>,
    },
    {
      name: "Kontak WA",
      selector: (row) => row.kontak,
      cell: (row) => <p>{row.kontak}</p>,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      innerWidth: "200px",
      cell: (row) => <a href={`mailto:${row.email}`}>{row.email}</a>,
    },
    {
      name: "username",
      selector: (row) => row.username,
      innerWidth: "200px",
      cell: (row) => <p>{row.username}</p>,
    },
    {
      name: "password",
      selector: (row) => row.password,
      innerWidth: "200px",
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
          {/* <ChangeStatus /> */}

          {openModal && (
            <ChangeStatusModal
              close={closeModalHandler}
              username={row.nisn}
              id={selectedId}
              url="siswa"
            />
          )}
        </div>
      ),
      sortable: true,
    },
  ];

  return (
    <div className="flex w-full max-h-screen overflow-x-visible">
      <AdminNav />
      <div className="w-full max-h-screen">
        <DataTable
          title={`Peserta SMA | ${dataPeserta?.length}`}
          columns={columns}
          data={dataPeserta}
          // fixedHeader
          pagination
          scrollX
          conditionalRowStyles={conditionalRowStyles}
          // theme="dark"
        />
      </div>
    </div>
  );
};

export default DaftarPeserta;
