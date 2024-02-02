import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import { RequestApi } from "../helper/RequestApi";

const PendaftaranPeserta = () => {
  const [genderOption, setGenderOption] = useState();
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const [gender, setGender] = useState("");
  const [sekolahId, setSekolahId] = useState();
  const [kontakWa, setKontakWa] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [foto, setFoto] = useState();
  const [listSekolah, setListSekolah] = useState();
  const [fotoPreview, setFotoPreview] = useState();

  useEffect(() => {
    const getInstansi = async () => {
      const res = await RequestApi("GET", `instansi`, {}, {}, "Mencoba Mengambil Data Instansi");

      setListSekolah(res.data);
      console.log(res.data);
    };
    getInstansi();
  }, []);
  // const pendaftaranHandler = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("nama", nama);
  //   formData.append("nisn", nisn);
  //   formData.append("jenis_kelamin", genderOption);
  //   formData.append("instansi_id", sekolahId);
  //   formData.append("kontak", kontakWa);
  //   formData.append("email", email);
  //   formData.append("username", username);
  //   formData.append("foto", foto);

  //   console.log({ formData });

  //   try {
  //     const res = await RequestApi(
  //       "POST",
  //       `siswa`,
  //       formData,
  //       {},
  //       "Mencoba Menyimpan Data Instansi"
  //     );

  //     console.log("data berhasil di simpan", res);
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // };

  const pendaftaranHandler = async (e) => {
    e.preventDefault();

    const data = {
      nama: nama,
      nisn: nisn,
      jenis_kelamin: genderOption,
      instansi_id: sekolahId,
      kontak: kontakWa,
      email: email,
      username: username,
      foto: foto,
    };

    console.log({ data });

    try {
      const res = await RequestApi("POST", `siswa`, data, {}, "Mencoba Menyimpan Data Peserta");

      console.log("data berhasil di simpan", res);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const genderOptionHandler = (e) => setGenderOption(e.target.value);

  const fotoOnChange = (e) => {
    // setFoto(e.target.file[0]);
    console.log(e.target.files);
    setFoto(e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      setFotoPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = (e) => {
    setFoto(null);
    setFotoPreview(null);
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-col items-center">
        <div className="flex flex-col gap-3 max-w-[500px]">
          <InputForm label="Nama" onChange={(e) => setNama(e.target.value)} value={nama} />
          <InputForm label="NISN/NIM" onChange={(e) => setNisn(e.target.value)} value={nisn} />
          <div>
            <p className="text-primary font-bold mb-3">Gender</p>
            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="laki-laki"
                  value="laki-laki"
                  onChange={genderOptionHandler}
                  checked={genderOption === "laki-laki"}
                  className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                />
                <label htmlFor="laki" className="text-primary font-bold">
                  Laki - laki
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="perempuan"
                  value="perempuan"
                  onChange={genderOptionHandler}
                  checked={genderOption === "perempuan"}
                  className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                />
                <label htmlFor="perempuan" className="text-primary font-bold">
                  Perempuan
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label htmlFor="jenjang" className="text-primary font-bold">
                Sekolah
              </label>
              <select
                name="jenjang"
                id="jenjang"
                className="h-10 rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
                onChange={(e) => setSekolahId(e.target.value)}
                value={sekolahId}
              >
                <option disabled selected>
                  Pilih Sekolah
                </option>
                {listSekolah?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.instansi}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <InputForm
            label="Kontak WA"
            onChange={(e) => setKontakWa(e.target.value)}
            value={kontakWa}
          />

          <div className="flex gap-5">
            <InputForm label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <InputForm
              label="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1">Unggah Foto</p>
              <label
                htmlFor="foto"
                className="font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={fotoOnChange}
              />
              {fotoPreview && (
                <div className="w-fit relative mt-5">
                  <img
                    src={fotoPreview}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeImage}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1">Foto Rapor</p>
              <label
                htmlFor="foto"
                className="font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto"
                className="h-10 rounded-xl bg-white w-40   px-3 hidden"
              />
            </div>
          </div>
          <button
            className="rounded-xl border-2 border-primary h-10 w-40 font-semibold text-primary"
            onClick={pendaftaranHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PendaftaranPeserta;
