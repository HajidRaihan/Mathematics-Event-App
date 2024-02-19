import { useState } from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import DaftarModal from "../components/DaftarModal";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import { RequestApi } from "../helper/RequestApi";

const PendaftaranInstansi = () => {
  const [namaSekolah, setNamaSekolah] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tingkat, setTingkat] = useState("mahasiswa");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kontakPendamping, setkontakPendamping] = useState("");
  const [kontakWa, setKontakWa] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertDesc, setAlertDesc] = useState("Gagal memasukkan data");

  const openHandler = () => {
    setShowModal(true);
  };
  const closeHandler = () => {
    setShowModal(false);
  };

  const showAlertHandler = (message) => {
    setShowAlert(true);
    setAlertDesc(message);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const pendaftaranHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      instansi: namaSekolah,
      alamat: alamat,
      jenjang: tingkat,
      provinsi: provinsi,
      "kota/kabupaten": kabupaten,
      kontak_pendamping: kontakPendamping,
      email_pendamping: email,
    };

    try {
      const res = await RequestApi("POST", `instansi`, data, {}, "Mencoba Menyimpan Data Instansi");

      if (res.status === true) {
        openHandler();
        setIsLoading(false);
      }
      if (res.status === false) {
        showAlertHandler(res.message);
      }
      setIsLoading(false);

      console.log("data berhasil di simpan", res);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      showAlertHandler(error.response.request.response);
      throw error;
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-col items-center">
        <div className="flex flex-col gap-5 md:w-[500px]">
          <h1 className="text-3xl font-bold text-primary">Pendaftaran Instansi</h1>
          <div className="w-full h-0.5 bg-primary mb-5" />
          <InputForm
            label="Nama Sekolah"
            onChange={(e) => setNamaSekolah(e.target.value)}
            value={namaSekolah}
          />
          <InputForm label="Alamat" onChange={(e) => setAlamat(e.target.value)} value={alamat} />

          <div className="md:flex gap-3 w-full">
            <div className="w-1/2 mb-3 md:mb-0">
              <label htmlFor="jenjang" className="text-primary text-xs font-bold">
                Tingkat
              </label>
              <select
                name="jenjang"
                id="jenjang"
                className="h-10 text-xs rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
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
            <InputForm
              label="Provinsi"
              onChange={(e) => setProvinsi(e.target.value)}
              value={provinsi}
            />
          </div>
          <InputForm
            label="Kabupaten/Kota"
            onChange={(e) => setKabupaten(e.target.value)}
            value={kabupaten}
          />
          <div className="flex md:flex-row  md:gap-5 gap-3 flex-col">
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

          <ButtonSubmit submitHandler={pendaftaranHandler} isLoading={isLoading} />
          {showAlert && <Alert title={alertDesc} />}
        </div>
        {showModal && <DaftarModal closeHandler={closeHandler} />}
      </div>
    </>
  );
};

export default PendaftaranInstansi;
