import { useState } from "react";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";

const Pendaftaran = () => {
  const [genderOption, setGenderOption] = useState();

  const genderOptionHandler = (e) => setGenderOption(e.target.value);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col mx-52 gap-3">
        <form className="flex flex-col gap-5 w-[500px]">
          <InputForm label="Nama" />
          <InputForm label="NISN/NIM" />
          <div>
            <p className="text-primary font-bold mb-3">Gender</p>
            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="laki"
                  value="laki-laki"
                  onChange={genderOptionHandler}
                  checked={genderOption === "laki-laki"}
                  className="h-8 w-8 shadow-secondary accent-secondary drop-shadow-xl"
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
                  className="h-8 w-8 shadow-secondary accent-secondary drop-shadow-xl"
                />
                <label htmlFor="perempuan" className="text-primary font-bold">
                  Perempuan
                </label>
              </div>
            </div>
          </div>
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

          <div>
            <label htmlFor="nim" className="text-primary font-bold">
              Sekolah
            </label>
            <input
              type="text"
              id="nim"
              className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3"
            />
          </div>

          <div className="flex gap-3">
            <div>
              <label htmlFor="jenjang" className="text-primary font-bold">
                Tingkat
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
            <div>
              <label htmlFor="jenjang" className="text-primary font-bold">
                Kontak WA
              </label>
              <input
                type="text"
                id="jenjang"
                className="h-10 rounded-xl bg-white w-full shadow-md shadow-secondary p-3"
              />
            </div>
          </div>
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
            <InputForm label="Email" />
            <InputForm label="username" />
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
                className="h-10 rounded-xl bg-white w-40 shadow-md shadow-secondary px-3 hidden"
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1">Foto Rapor</p>
              <label
                htmlFor="foto"
                className="font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto"
                className="h-10 rounded-xl bg-white w-40 shadow-md shadow-secondary px-3 hidden"
              />
            </div>
          </div>
          <button className="rounded-xl border-2 border-primary h-10 w-40 font-semibold text-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Pendaftaran;
