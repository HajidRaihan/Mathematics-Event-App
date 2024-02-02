import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import { RequestApi } from "../helper/RequestApi";

const PendaftaranMahasiswa = () => {
  const [genderOption1, setGenderOption1] = useState();
  const [genderOption2, setGenderOption2] = useState();
  const [nama1, setNama1] = useState("");
  const [nama2, setNama2] = useState("");
  const [nim1, setNim1] = useState("");
  const [nim2, setnim2] = useState("");
  const [gender1, setGender1] = useState("");
  const [gender2, setGender2] = useState("");
  const [instansi, setInstansi] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [kontak1, setKontak1] = useState("");
  const [kontak2, setKontak2] = useState("");
  const [username, setUsername] = useState("");
  const [foto1, setFoto1] = useState();
  const [foto2, setFoto2] = useState();
  const [listInstansi, setListInstansi] = useState();

  const genderOptionHandler1 = (e) => setGenderOption1(e.target.value);
  const genderOptionHandler2 = (e) => setGenderOption2(e.target.value);

  useEffect(() => {
    const getInstansi = async () => {
      const res = await RequestApi("GET", `instansi`, {}, {}, "Mencoba Mengambil Data Instansi");

      setListInstansi(res.data);
      console.log(res.data);
    };
    getInstansi();
  }, []);

  const pendaftaranHandler = async (e) => {
    e.preventDefault();

    console.log("clicked");

    const formData = new FormData();
    formData.append("anggota_1", nama1);
    formData.append("anggota_2", nama2);
    formData.append("nim_1", nim1);
    formData.append("nim_2", nim2);
    formData.append("jenis_kelamin_1", genderOption1);
    formData.append("jenis_kelamin_2", genderOption2);
    formData.append("instansi_id", instansi);
    formData.append("kontak_1", kontak1);
    formData.append("kontak_2", kontak2);
    formData.append("email_1", email1);
    formData.append("email_2", email2);
    formData.append("username", username);
    formData.append("foto_1", foto1);
    formData.append("foto_2", foto2);

    console.log({ formData });

    try {
      const res = await RequestApi(
        "POST",
        `mahasiswa`,
        formData,
        {
          // You may need to set headers, for example:
          // 'Content-Type': 'multipart/form-data'
        },
        "Mencoba Menyimpan Data Instansi"
      );

      console.log("data berhasil di simpan", res);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //   const pendaftaranHandler = async (e) => {
  //     e.preventDefault();

  //     console.log("clicked");

  //     const data = {
  //       anggota_1: nama1,
  //       anggota_2: nama2,
  //       nim_1: nim1,
  //       nim_2: nim2,
  //       jenis_kelamin_1: genderOption1,
  //       jenis_kelamin_2: genderOption2,
  //       instansi_id: instansi,
  //       kontak_1: kontak1,
  //       kontak_2: kontak2,
  //       email_1: email1,
  //       email_2: email2,
  //       username: username,
  //       foto_1: foto1,
  //       foto_2: foto2,
  //     };

  //     console.log({ foto2 });

  //     console.log({ data });

  //     try {
  //       const res = await RequestApi(
  //         "POST",
  //         `mahasiswa`,
  //         data,
  //         {},
  //         "Mencoba Menyimpan Data Instansi"
  //       );

  //       console.log("data berhasil di simpan", res);
  //     } catch (error) {
  //       console.log(error);
  //       throw error;
  //     }
  //   };

  const fotoOnChange1 = (e) => {
    console.log(e.target.files);
    setFoto1(e.target.files);
  };
  const fotoOnChange2 = (e) => {
    console.log(e.target.files);
    setFoto2(e.target.files);
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-col items-center">
        <div className="flex flex-col gap-3 w-[500px]">
          <div className="flex gap-5">
            <InputForm
              label="Nama Peserta 1"
              onChange={(e) => setNama1(e.target.value)}
              value={nama1}
            />
            <InputForm
              label="Nama Peserta 2"
              onChange={(e) => setNama2(e.target.value)}
              value={nama2}
            />
          </div>
          <div className="flex gap-5">
            <InputForm
              label="NIM Peserta 1"
              onChange={(e) => setNim1(e.target.value)}
              value={nim1}
            />
            <InputForm
              label="NIM Peserta 2"
              onChange={(e) => setnim2(e.target.value)}
              value={nim2}
            />
          </div>
          <div className="flex ">
            <div className="w-full">
              <p className="text-primary font-bold mb-3">Gender 1</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="laki-laki"
                    value="laki-laki"
                    onChange={genderOptionHandler1}
                    checked={genderOption1 === "laki-laki"}
                    className="h-8 w-8 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="laki" className="text-primary font-bold">
                    Laki - laki
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="perempuan1"
                    value="perempuan"
                    onChange={genderOptionHandler1}
                    checked={genderOption1 === "perempuan"}
                    className="h-8 w-8 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="perempuan1" className="text-primary font-bold">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-primary font-bold mb-3">Gender</p>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="laki2"
                    value="laki-laki"
                    onChange={genderOptionHandler2}
                    checked={genderOption2 === "laki-laki"}
                    className="h-8 w-8 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="laki2" className="text-primary font-bold">
                    Laki - laki
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="perempuan2"
                    value="perempuan"
                    onChange={genderOptionHandler2}
                    checked={genderOption2 === "perempuan"}
                    className="h-8 w-8 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="perempuan2" className="text-primary font-bold">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label htmlFor="instansi" className="text-primary font-bold">
                Instansi
              </label>
              <select
                name="instansi"
                id="instansi"
                className="h-10 rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
                onChange={(e) => setInstansi(e.target.value)}
                value={instansi}
              >
                <option disabled selected>
                  Pilih Instansi
                </option>
                {listInstansi?.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.instansi}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-5">
            <InputForm label="Email 1" onChange={(e) => setEmail1(e.target.value)} value={email1} />
            <InputForm label="Email 2" onChange={(e) => setEmail2(e.target.value)} value={email2} />
          </div>

          <div className="flex gap-5">
            <InputForm
              label="Kontak WA 1"
              onChange={(e) => setKontak1(e.target.value)}
              value={kontak1}
            />
            <InputForm
              label="Kontak WA 2"
              onChange={(e) => setKontak2(e.target.value)}
              value={kontak2}
            />
          </div>

          <InputForm
            label="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <div className="flex gap-20">
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1">Foto Peserta 1</p>
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
                onChange={fotoOnChange1}
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1">Foto Peserta 1</p>
              <label
                htmlFor="foto2"
                className="font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto2"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={fotoOnChange2}
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

export default PendaftaranMahasiswa;