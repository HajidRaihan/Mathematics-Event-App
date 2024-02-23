import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import ButtonSubmit from "../components/ButtonSubmit";
import DaftarModal from "../components/DaftarModal";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
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
  const [rapor, setRapor] = useState();
  const [listSekolah, setListSekolah] = useState();
  const [fotoPreview, setFotoPreview] = useState();
  const [raporPreview, setRaporPreview] = useState();
  const [regional, setRegional] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertDesc, setAlertDesc] = useState("Gagal memasukkan data");

  useEffect(() => {
    const getInstansi = async () => {
      const res = await RequestApi("GET", `instansi`, {}, {}, "Mencoba Mengambil Data Instansi");

      setListSekolah(res.data);
      console.log(res.data);
    };
    getInstansi();
  }, []);

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
      nama: nama,
      nisn: nisn,
      jenis_kelamin: genderOption,
      instansi_id: sekolahId,
      kontak: kontakWa,
      email: email,
      foto: foto,
      rapor: rapor,
      regional: regional,
    };

    console.log({ data });

    try {
      const res = await RequestApi("POST", `siswa`, data, {}, "Mencoba Menyimpan Data Peserta");
      if (res.status === true) {
        openHandler();
        setIsLoading(false);
        setNama("");
        setNisn("");
        setKontakWa("");
        setEmail("");
        setFoto(null);
        setRapor(null);
        setFotoPreview("");
        setRaporPreview("");
      }
      if (res.status === false) {
        showAlertHandler(res.message);
      }
      setIsLoading(false);

      console.log("data berhasil di simpan", res);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertHandler(error.response.request.response);
      // throw error;
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

  const raporOnChange = (e) => {
    // setFoto(e.target.file[0]);
    console.log(e.target.files);
    setRapor(e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      setRaporPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = (e) => {
    setFoto(null);
    setFotoPreview(null);
  };

  const removeRapor = (e) => {
    setRapor(null);
    setRaporPreview(null);
  };

  const regionalOnChange = (e) => {
    console.log(e.target.value);
    setRegional(e.target.value);
  };

  useEffect(() => {
    if (listSekolah && listSekolah.length > 0) {
      setSekolahId(listSekolah[0].id);
    }
  }, [listSekolah]);

  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-col items-center">
        <div className="flex flex-col gap-5 max-w-[500px] mb-32">
          <h1 className="text-3xl font-bold text-primary">Pendaftaran Siswa</h1>
          <div className="w-full h-0.5 bg-primary mb-5" />
          <InputForm label="Nama" onChange={(e) => setNama(e.target.value)} value={nama} />
          <InputForm label="NISN/NIM" onChange={(e) => setNisn(e.target.value)} value={nisn} />
          <div>
            <p className="text-primary font-bold mb-3 text-xs">Gender</p>
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
                <label htmlFor="laki" className="text-primary font-bold text-xs">
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
                <label htmlFor="perempuan" className="text-primary font-bold text-xs">
                  Perempuan
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="md:w-full w-[300px]">
              <label htmlFor="jenjang" className="text-primary font-bold text-xs">
                Sekolah
              </label>
              <select
                name="jenjang"
                id="jenjang"
                className="text-xs h-10 rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
                onChange={(e) => setSekolahId(e.target.value)}
                value={sekolahId}
              >
                <option disabled selected>
                  Pilih Sekolah
                </option>
                {listSekolah?.map((data) => (
                  <>
                    {data.jenjang !== "mahasiswa" ? (
                      <option key={data.id} value={data.id}>
                        {data.instansi}
                      </option>
                    ) : null}
                  </>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="md:w-full w-[300px]">
              <label htmlFor="jenjang" className="text-primary font-bold text-xs">
                Regional
              </label>
              <select
                name="jenjang"
                id="jenjang"
                className="text-xs h-10 rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
                onChange={regionalOnChange}
                value={regional}
              >
                <option disabled selected>
                  Pilih Regional
                </option>
                <option value="Regional 1 : Makassar, Maros, Pangkep, Gowa, dan Takalar">
                  Regional 1 : Makassar, Maros, Pangkep, Gowa, dan Takalar
                </option>
                <option value="Regional 2 : Parepare, Barru, Sidrap, Pinrang">
                  Regional 2 : Parepare, Barru, Sidrap, Pinrang
                </option>
                <option value="Regional 3 : Tana Toraja, Toraja Utara, Enrekang, Palopo, Luwu Timur, Luwu Utara">
                  Regional 3 : Tana Toraja, Toraja Utara, Enrekang, Palopo, Luwu Timur, Luwu Utara
                </option>
                <option value="Regional 4 : Bantaeng, Jeneponto, Bulukumba, Selayar">
                  Regional 4 : Bantaeng, Jeneponto, Bulukumba, Selayar
                </option>
                <option value="Regional 5 : Bone, Wajo, Sinjai, Soppeng">
                  Regional 5 : Bone, Wajo, Sinjai, Soppeng
                </option>
                <option value="Regional 6 : Sulbar, Sulteng, Sultra, Sulut, Gorontalo">
                  Regional 6 : Sulbar, Sulteng, Sultra, Sulut, Gorontalo
                </option>
                <option value="Regional 7 : Diluar Pulau Sulawesi">
                  Regional 7 : Diluar Pulau Sulawesi
                </option>

                {/* {listSekolah?.map((data) => (
                  <>
                    {data.jenjang !== "mahasiswa" ? (
                      <option key={data.id} value={data.id}>
                        {data.instansi}
                      </option>
                    ) : null}
                  </>
                ))} */}
              </select>
            </div>
          </div>
          <InputForm
            label="Kontak WA"
            onChange={(e) => setKontakWa(e.target.value)}
            value={kontakWa}
          />
          <InputForm label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <div className="flex md:gap-20 gap-5 md:flex-row flex-col">
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1 text-xs">
                Unggah Foto{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="foto"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl"
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
              <p className="text-primary font-bold mb-1 text-xs">
                Scan Rapor semester terakhir{" "}
                <span className="text-red-600 text-[10px] font-normal">(pdf) max 500kb</span>
              </p>
              <label
                htmlFor="rapor"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="rapor"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={raporOnChange}
              />
              {rapor && (
                <div className="w-40 py-2 border border-1 border-black flex justify-center items-center relative mt-3">
                  <p className="text-xs text-center text-wrap">{rapor?.name}</p>
                  <p
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeRapor}
                  >
                    x
                  </p>
                </div>
              )}
            </div>
          </div>
          <ButtonSubmit submitHandler={pendaftaranHandler} isLoading={isLoading} />
          <div>
            <p className="text-primary text-xs font-semibold">
              Biaya Pendaftaran Rp. 30.000,-/Orang
            </p>
            <p className="text-primary text-xs font-semibold">Nomor Rekening Pembayaran:</p>
            <p className="text-primary text-xs font-semibold">
              1554-01-001512-53-3 a.n. Mathematics Event (BRI)
            </p>
          </div>

          {showAlert && <Alert title={alertDesc} />}
          <Notes />
        </div>
        {showModal && (
          <DaftarModal title="Pendaftaran Siswa berhasil dilakukan" closeHandler={closeHandler} />
        )}
      </div>
    </>
  );
};

export default PendaftaranPeserta;
