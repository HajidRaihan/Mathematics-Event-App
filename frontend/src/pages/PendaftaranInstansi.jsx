import { useState } from "react";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import { RequestApi } from "../helper/RequestApi";

const PendaftaranInstansi = () => {
  const [genderOption, setGenderOption] = useState();
  const [namaSekolah, setNamaSekolah] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tingkat, setTingkat] = useState("mahasiswa");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kontakPendamping, setkontakPendamping] = useState("");
  const [kontakWa, setKontakWa] = useState("");
  const [email, setEmail] = useState("");

  const genderOptionHandler = (e) => setGenderOption(e.target.value);

  const pendaftaranHandler = async (e) => {
    e.preventDefault();

    const data = {
      instansi: namaSekolah,
      alamat: alamat,
      jenjang: tingkat,
      provinsi: provinsi,
      "kota/kabupaten": kabupaten,
      kontak_pendamping: kontakPendamping,
      email_pendamping: email,
    };

    console.log(data);

    try {
      const res = await RequestApi("POST", `instansi`, data, {}, "Mencoba Menyimpan Data Instansi");

      console.log("data berhasil di simpan", res);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-col items-center">
        <div className="flex flex-col gap-3 w-[500px]">
          <InputForm
            label="Nama Sekolah"
            onChange={(e) => setNamaSekolah(e.target.value)}
            value={namaSekolah}
          />
          <InputForm label="Alamat" onChange={(e) => setAlamat(e.target.value)} value={alamat} />

          {/* <div>
            <label htmlFor="tanggal" className="text-primary font-bold">
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggal"
              className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3"
            />
          </div> */}

          <div className="flex gap-3 w-full">
            <div className="w-1/2">
              <label htmlFor="jenjang" className="text-primary font-bold">
                Tingkat
              </label>
              <select
                name="jenjang"
                id="jenjang"
                className="h-10 text-sm rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
                onChange={(e) => {
                  setTingkat(e.target.value);
                  console.log(e.target.value);
                }}
                value={tingkat}
              >
                <option value="mahasiswa">Mahasiswa</option>
                <option value="sma">SMA</option>
              </select>
            </div>
            {/* <div className="w-full">
              <div>
                <label htmlFor="jenjang" className="text-primary font-bold">
                  Provinsi
                </label>
                <select
                  name="jenjang"
                  id="jenjang"
                  className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3"
                >
                  <option value="mahasiswa">Mahasiswa</option>
                  <option value="sma">SMA</option>
                </select>
              </div>
            </div> */}
            <InputForm
              label="Provinsi"
              onChange={(e) => setProvinsi(e.target.value)}
              value={provinsi}
            />
          </div>
          <InputForm
            label="Kabupaten"
            onChange={(e) => setKabupaten(e.target.value)}
            value={kabupaten}
          />
          {/* <div className="w-1/2">
            <label htmlFor="jenjang" className="text-primary font-bold">
              Kabupaten
            </label>
            <select
              name="jenjang"
              id="jenjang"
              className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary px-3"
            >
              <option value="mahasiswa">Mahasiswa</option>
              <option value="sma">SMA</option>
            </select>
          </div> */}
          {/* <div>
            <label htmlFor="sekolah" className="text-primary font-bold">
              Nama Sekolah/Universitas
            </label>
            <input
              type="text"
              id="sekolah"
              className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3"
            />
          </div> */}
          <div className="flex gap-5">
            <InputForm
              label="Kontak Pendamping"
              onChange={(e) => setkontakPendamping(e.target.value)}
              value={kontakPendamping}
            />
            <InputForm
              label="Kontak WA"
              onChange={(e) => setKontakWa(e.target.value)}
              value={kontakWa}
            />
          </div>
          <InputForm
            label="Email Pendamping"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <button
            className="rounded-lg border-2 border-primary h-8 mt-5 w-40 font-semibold text-primary"
            onClick={pendaftaranHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PendaftaranInstansi;
