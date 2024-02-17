import AdminNav from "../../components/AdminNav";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { RequestApi } from "../../helper/RequestApi";

const DaftarMahasiswa = () => {
  const [dataPeserta, setDataPeserta] = useState();
  useEffect(() => {
    const getMahasiswa = async () => {
      const res = await RequestApi("GET", `mahasiswa`, {}, {}, "Mencoba Mengambil Data Instansi");

      setDataPeserta(res.data);
      console.log(res.data);
    };
    getMahasiswa();
  }, []);
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      cell: (row) => <p>{row.id}</p>,
    },
    {
      name: "Foto",
      selector: (row) => (
        <img
          src={`http://localhost:8000/api/${row.foto}`}
          alt="foto peserta"
          className="w-20 h-20 rounded-full my-3"
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
      name: "Foto 1",
      selector: (row) => row.foto_1,
      cell: (row) => <p>{row.foto_1}</p>,
    },
    {
      name: "Foto 2",
      selector: (row) => row.foto_2,
      cell: (row) => <p>{row.foto_2}</p>,
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

  const data = [
    {
      id: 1,
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      nama: "John",
      nisn: "123456789",
      gender: "L",
      sekolah: "SMA 1",
      kontak: "08123456789",
      email: "XNqoT@example.com",
      username: "john123",
      password: "john123",
    },

    {
      id: 1,
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      nama: "John",
      nisn: "123456789",
      gender: "L",
      sekolah: "SMA 1",
      kontak: "08123456789",
      email: "XNqoT@example.com",
      username: "john123",
      password: "john123",
    },
    {
      id: 2,
      foto: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      nama: "Emily",
      nisn: "987654321",
      gender: "F",
      sekolah: "SMK 2",
      kontak: "08765432109",
      email: "Emily@example.com",
      username: "emily456",
      password: "emily456",
    },
    {
      id: 3,
      foto: "https://images.unsplash.com/photo-1483340024898-e3d9f792f536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      nama: "Alex",
      nisn: "456789012",
      gender: "L",
      sekolah: "SMP 3",
      kontak: "08901234567",
      email: "Alex@example.com",
      username: "alex789",
      password: "alex789",
    },
    {
      id: 4,
      foto: "https://images.unsplash.com/photo-1496080174650-bff7bb0e2de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      nama: "Sophie",
      nisn: "567890123",
      gender: "F",
      sekolah: "SD 4",
      kontak: "09876543210",
      email: "Sophie@example.com",
      username: "sophie123",
      password: "sophie123",
    },
    {
      id: 5,
      foto: "https://images.unsplash.com/photo-1496483648147-fc3c9907fbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80",
      nama: "David",
      nisn: "234567890",
      gender: "L",
      sekolah: "TK 5",
      kontak: "01234567890",
      email: "David@example.com",
      username: "david234",
      password: "david234",
    },
    {
      id: 6,
      foto: "https://images.unsplash.com/photo-1471005197911-88e9c5647c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      nama: "Ava",
      nisn: "345678901",
      gender: "F",
      sekolah: "Playgroup 6",
      kontak: "02345678901",
      email: "Ava@example.com",
      username: "ava567",
      password: "ava567",
    },
    {
      id: 7,
      foto: "https://images.unsplash.com/photo-1477884213364-7e5a1d909ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      nama: "William",
      nisn: "876543210",
      gender: "L",
      sekolah: "Elementary 7",
      kontak: "03456789012",
      email: "William@example.com",
      username: "william876",
      password: "william876",
    },
    {
      id: 8,
      foto: "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      nama: "Grace",
      nisn: "765432109",
      gender: "F",
      sekolah: "Middle School 8",
      kontak: "04567890123",
      email: "Grace@example.com",
      username: "grace321",
      password: "grace321",
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
          scrollX
        />
      </div>
    </div>
  );
};

export default DaftarMahasiswa;
