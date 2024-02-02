import AdminNav from "../../components/AdminNav";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { RequestApi } from "../../helper/RequestApi";

const DaftarPeserta = () => {
  const [dataPeserta, setDataPeserta] = useState();
  useEffect(() => {
    const getInstansi = async () => {
      const res = await RequestApi("GET", `siswa`, {}, {}, "Mencoba Mengambil Data Instansi");

      setDataPeserta(res.data);
      console.log(res.data);
    };
    getInstansi();
  }, []);
  const columns = [
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
      name: "Nama",
      selector: (row) => row.nama,
    },
    {
      name: "NISN",
      selector: (row) => row.nisn,
    },
    {
      name: "Gender",
      selector: (row) => row.jenis_kelamin,
    },
    {
      name: "Sekolah",
      selector: (row) => row.instansi_id,
    },
    {
      name: "Kontak WA",
      selector: (row) => row.kontak,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      innerWidth: "200px",
      cell: (row) => <a href={`mailto:${row.email}`}>{row.email}</a>,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     nama: "John",
  //     nisn: "123456789",
  //     gender: "L",
  //     sekolah: "SMA 1",
  //     kontak: "08123456789",
  //     email: "XNqoT@example.com",
  //     username: "john123",
  //     password: "john123",
  //   },

  //   {
  //     id: 1,
  //     foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     nama: "John",
  //     nisn: "123456789",
  //     gender: "L",
  //     sekolah: "SMA 1",
  //     kontak: "08123456789",
  //     email: "XNqoT@example.com",
  //     username: "john123",
  //     password: "john123",
  //   },
  //   {
  //     id: 2,
  //     foto: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //     nama: "Emily",
  //     nisn: "987654321",
  //     gender: "F",
  //     sekolah: "SMK 2",
  //     kontak: "08765432109",
  //     email: "Emily@example.com",
  //     username: "emily456",
  //     password: "emily456",
  //   },
  //   {
  //     id: 3,
  //     foto: "https://images.unsplash.com/photo-1483340024898-e3d9f792f536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //     nama: "Alex",
  //     nisn: "456789012",
  //     gender: "L",
  //     sekolah: "SMP 3",
  //     kontak: "08901234567",
  //     email: "Alex@example.com",
  //     username: "alex789",
  //     password: "alex789",
  //   },
  //   {
  //     id: 4,
  //     foto: "https://images.unsplash.com/photo-1496080174650-bff7bb0e2de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //     nama: "Sophie",
  //     nisn: "567890123",
  //     gender: "F",
  //     sekolah: "SD 4",
  //     kontak: "09876543210",
  //     email: "Sophie@example.com",
  //     username: "sophie123",
  //     password: "sophie123",
  //   },
  //   {
  //     id: 5,
  //     foto: "https://images.unsplash.com/photo-1496483648147-fc3c9907fbc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80",
  //     nama: "David",
  //     nisn: "234567890",
  //     gender: "L",
  //     sekolah: "TK 5",
  //     kontak: "01234567890",
  //     email: "David@example.com",
  //     username: "david234",
  //     password: "david234",
  //   },
  //   {
  //     id: 6,
  //     foto: "https://images.unsplash.com/photo-1471005197911-88e9c5647c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //     nama: "Ava",
  //     nisn: "345678901",
  //     gender: "F",
  //     sekolah: "Playgroup 6",
  //     kontak: "02345678901",
  //     email: "Ava@example.com",
  //     username: "ava567",
  //     password: "ava567",
  //   },
  //   {
  //     id: 7,
  //     foto: "https://images.unsplash.com/photo-1477884213364-7e5a1d909ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //     nama: "William",
  //     nisn: "876543210",
  //     gender: "L",
  //     sekolah: "Elementary 7",
  //     kontak: "03456789012",
  //     email: "William@example.com",
  //     username: "william876",
  //     password: "william876",
  //   },
  //   {
  //     id: 8,
  //     foto: "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  //     nama: "Grace",
  //     nisn: "765432109",
  //     gender: "F",
  //     sekolah: "Middle School 8",
  //     kontak: "04567890123",
  //     email: "Grace@example.com",
  //     username: "grace321",
  //     password: "grace321",
  //   },
  // ];

  const generateRandomData = () => {
    const randomGender = Math.random() < 0.5 ? "L" : "F";
    const randomSekolah = `School ${Math.floor(Math.random() * 20) + 1}`;
    const randomNisn = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");
    const randomKontak = `0${Math.floor(Math.random() * 10000000000)}`;
    const randomEmail = `${Math.random().toString(36).substring(2, 10)}@example.com`;
    const randomUsername = `${Math.random().toString(36).substring(2, 10)}${Math.floor(
      Math.random() * 100
    )}`;
    const randomPassword = `${Math.random().toString(36).substring(2, 10)}${Math.floor(
      Math.random() * 100
    )}`;

    return {
      id: Math.floor(Math.random() * 100) + 1,
      foto: "https://via.placeholder.com/150", // You can replace this with a placeholder URL or generate an actual image URL
      nama: "RandomName",
      nisn: randomNisn,
      gender: randomGender,
      sekolah: randomSekolah,
      kontak: randomKontak,
      email: randomEmail,
      username: randomUsername,
      password: randomPassword,
    };
  };

  const generatedData = Array.from({ length: 100 }, (_, index) => generateRandomData());

  console.log(generatedData);

  return (
    <div className="flex w-full max-h-screen overflow-x-visible">
      <AdminNav />
      <div className="w-full max-h-screen">
        <DataTable
          title="Peserta SMA"
          columns={columns}
          data={dataPeserta}
          // fixedHeader
          pagination
          scrollX
          // theme="dark"
        />
      </div>
    </div>
  );
};

export default DaftarPeserta;
