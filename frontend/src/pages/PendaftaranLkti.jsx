import { useEffect, useState } from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import DaftarModal from "../components/DaftarModal";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import { RequestApi } from "../helper/RequestApi";
import Notes from "../components/Notes";

const PendaftaranLkti = () => {
  const [genderOption1, setGenderOption1] = useState();
  const [genderOption2, setGenderOption2] = useState();
  const [genderOption3, setGenderOption3] = useState();
  const [nama1, setNama1] = useState("");
  const [nama2, setNama2] = useState("");
  const [nama3, setNama3] = useState("");
  const [nim1, setNim1] = useState("");
  const [nim2, setNim2] = useState("");
  const [nim3, setNim3] = useState("");
  const [instansi, setInstansi] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [email3, setEmail3] = useState("");
  const [kontak1, setKontak1] = useState("");
  const [kontak2, setKontak2] = useState("");
  const [kontak3, setKontak3] = useState("");
  const [foto1, setFoto1] = useState();
  const [foto2, setFoto2] = useState();
  const [foto3, setFoto3] = useState();
  const [aktif1, setAktif1] = useState();
  const [aktif2, setAktif2] = useState();
  const [aktif3, setAktif3] = useState();
  const [listInstansi, setListInstansi] = useState();
  const [fotoPreview1, setFotoPreview1] = useState();
  const [fotoPreview2, setFotoPreview2] = useState();
  const [fotoPreview3, setFotoPreview3] = useState();
  const [aktifPreview1, setAktifPreview1] = useState();
  const [aktifPreview2, setAktifPreview2] = useState();
  const [aktifPreview3, setAktifPreview3] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertDesc, setAlertDesc] = useState("Gagal memasukkan data");

  const genderOptionHandler1 = (e) => setGenderOption1(e.target.value);
  const genderOptionHandler2 = (e) => setGenderOption2(e.target.value);
  const genderOptionHandler3 = (e) => setGenderOption3(e.target.value);

  useEffect(() => {
    const getInstansi = async () => {
      const res = await RequestApi("GET", `instansi`, {}, {}, "Mencoba Mengambil Data Instansi");

      setListInstansi(res.data);
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
      anggota_1: nama1,
      anggota_2: nama2,
      anggota_3: nama3,
      nim_1: nim1,
      nim_2: nim2,
      nim_3: nim3,
      jenis_kelamin_1: genderOption1,
      jenis_kelamin_2: genderOption2,
      jenis_kelamin_3: genderOption3,
      instansi_id: instansi,
      kontak_1: kontak1,
      kontak_2: kontak2,
      kontak_3: kontak3,
      email_1: email1,
      email_2: email2,
      email_3: email3,
      foto_1: foto1,
      foto_2: foto2,
      foto_3: foto3,
      aktif_1: aktif1,
      aktif_2: aktif2,
      aktif_3: aktif3,
    };

    console.log({ data });

    try {
      const res = await RequestApi("POST", `lkti`, data, {}, "Mencoba Menyimpan Data Peserta");

      if (res.status === true) {
        openHandler();
        setIsLoading(false);

        setNama1("");
        setNama2("");
        setNama3("");
        setNim1("");
        setNim2("");
        setNim3("");
        setKontak1("");
        setKontak2("");
        setKontak3("");
        setEmail1("");
        setEmail2("");
        setEmail3("");
        setFoto1(null);
        setFotoPreview1(null);
        setFoto2(null);
        setFotoPreview2(null);
        setFoto3(null);
        setFotoPreview3(null);
        setAktif1(null);
        setAktifPreview1(null);
        setAktif2(null);
        setAktifPreview2(null);
        setAktif3(null);
        setAktifPreview3(null);
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
      // throw error;
    }
  };

  const fotoOnChange1 = (e) => {
    const file = e.target.files;
    setFoto1(e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      setFotoPreview1(URL.createObjectURL(e.target.files[0]));
    }
  };
  const fotoOnChange2 = (e) => {
    const file = e.target.files;
    setFoto2(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setFotoPreview2(URL.createObjectURL(e.target.files[0]));
    }
  };
  const fotoOnChange3 = (e) => {
    const file = e.target.files;
    setFoto3(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setFotoPreview3(URL.createObjectURL(e.target.files[0]));
    }
  };

  const aktifOnChange1 = (e) => {
    const file = e.target.files;
    setAktif1(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setAktifPreview1(URL.createObjectURL(e.target.files[0]));
    }
  };

  const aktifOnChange2 = (e) => {
    const file = e.target.files;
    setAktif2(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setAktifPreview2(URL.createObjectURL(e.target.files[0]));
    }
  };

  const aktifOnChange3 = (e) => {
    const file = e.target.files;
    setAktif3(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setAktifPreview3(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage1 = () => {
    setFoto1(null);
    setFotoPreview1(null);
  };

  const removeImage2 = () => {
    setFoto2(null);
    setFotoPreview2(null);
  };
  const removeImage3 = () => {
    setFoto3(null);
    setFotoPreview3(null);
  };

  const removeAktif1 = () => {
    setAktif1(null);
    setAktifPreview1(null);
  };

  const removeAktif2 = () => {
    setAktif2(null);
    setAktifPreview2(null);
  };

  const removeAktif3 = () => {
    setAktif3(null);
    setAktifPreview3(null);
  };

  useEffect(() => {
    if (listInstansi && listInstansi.length > 0) {
      setInstansi(listInstansi[0].id);
    }
  }, [listInstansi]);

  return (
    <>
      <Navbar />
      <div className="mb-10 flex flex-col items-center">
        <div className="flex flex-col gap-3 md:w-[700px] mb-32">
          <h1 className="text-3xl font-bold text-primary">Pendaftaran LKTMN</h1>
          <div className="w-full h-0.5 bg-primary" />
          <p className="text-xs text-red-500  mb-5">
            Catatan : Minimal Jumlah tim adalah sebanyak 2 peserta
          </p>
          <div className="flex md:flex-row flex-col gap-5">
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
            <InputForm
              label="Nama Peserta 3"
              onChange={(e) => setNama3(e.target.value)}
              value={nama3}
            />
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <InputForm
              label="NIM Peserta 1"
              onChange={(e) => setNim1(e.target.value)}
              value={nim1}
            />
            <InputForm
              label="NIM Peserta 2"
              onChange={(e) => setNim2(e.target.value)}
              value={nim2}
            />
            <InputForm
              label="NIM Peserta 3"
              onChange={(e) => setNim3(e.target.value)}
              value={nim3}
            />
          </div>
          <div className="flex">
            <div className="w-full">
              <p className="text-primary font-bold mb-3 text-xs">Gender 1</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="laki-laki"
                    value="laki-laki"
                    onChange={genderOptionHandler1}
                    checked={genderOption1 === "laki-laki"}
                    className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="laki" className="text-xs text-primary font-bold">
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
                    className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="perempuan1" className="text-xs text-primary font-bold">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-primary font-bold mb-3 text-xs">Gender 2</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="laki2"
                    value="laki-laki"
                    onChange={genderOptionHandler2}
                    checked={genderOption2 === "laki-laki"}
                    className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="laki2" className="text-xs text-primary font-bold">
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
                    className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="perempuan2" className="text-xs text-primary font-bold">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-primary font-bold mb-3 text-xs">Gender 2</p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="laki3"
                    value="laki-laki"
                    onChange={genderOptionHandler3}
                    checked={genderOption3 === "laki-laki"}
                    className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="laki3" className="text-xs text-primary font-bold">
                    Laki - laki
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="perempuan3"
                    value="perempuan"
                    onChange={genderOptionHandler3}
                    checked={genderOption3 === "perempuan"}
                    className="h-5 w-5 shadow-secondary accent-secondary drop-shadow-xl"
                  />
                  <label htmlFor="perempuan3" className="text-xs text-primary font-bold">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label htmlFor="instansi" className="text-primary text-xs font-bold">
                Instansi
              </label>
              <select
                name="instansi"
                id="instansi"
                className="h-10 text-xs rounded-lg border border-black  bg-white w-full shadow-md shadow-secondary px-3"
                onChange={(e) => setInstansi(e.target.value)}
                value={instansi}
              >
                {listInstansi?.map((data) => (
                  <>
                    {data.jenjang === "mahasiswa" ? (
                      <option key={data.id} value={data.id}>
                        {data.instansi}
                      </option>
                    ) : null}
                  </>
                ))}
              </select>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-5">
            <InputForm label="Email 1" onChange={(e) => setEmail1(e.target.value)} value={email1} />
            <InputForm label="Email 2" onChange={(e) => setEmail2(e.target.value)} value={email2} />
            <InputForm label="Email 3" onChange={(e) => setEmail3(e.target.value)} value={email3} />
          </div>

          <div className="flex md:flex-row flex-col gap-5">
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
            <InputForm
              label="Kontak WA 3"
              onChange={(e) => setKontak3(e.target.value)}
              value={kontak3}
            />
          </div>

          <div className="flex md:gap-20 gap-5 md:flex-row flex-col mt-3">
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1 text-xs">
                Foto Peserta 1{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="foto"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={fotoOnChange1}
              />
              {fotoPreview1 && (
                <div className="w-fit relative mt-5">
                  <img
                    src={fotoPreview1}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeImage1}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-primary font-bold mb-1 text-xs">
                Foto Peserta 2{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="foto2"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto2"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={fotoOnChange2}
              />

              {fotoPreview2 && (
                <div className="w-fit relative mt-5">
                  <img
                    src={fotoPreview2}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeImage2}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-primary font-bold mb-1 text-xs">
                Foto Peserta 3{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="foto3"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="foto3"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={fotoOnChange3}
              />

              {fotoPreview3 && (
                <div className="w-fit relative mt-5">
                  <img
                    src={fotoPreview3}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeImage3}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex md:gap-20 gap-5 md:flex-row flex-col mt-3">
            <div className="flex flex-col ">
              <p className="text-primary font-bold mb-1 text-xs">
                Scan Surat Aktif Kuliah 1{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="aktif"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="aktif"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={aktifOnChange1}
              />
              {aktifPreview1 && (
                <div className="w-fit relative mt-5">
                  <img
                    src={aktifPreview1}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeAktif1}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-primary font-bold mb-1 text-xs">
                Scan Surat Aktif Kuliah 2{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="aktif2"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="aktif2"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={aktifOnChange2}
              />

              {aktifPreview2 && (
                <div className="w-fit relative mt-5">
                  <img
                    src={aktifPreview2}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeAktif2}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-primary font-bold mb-1 text-xs">
                Scan Surat Aktif Kuliah 3{" "}
                <span className="text-red-600 text-[10px] font-normal">
                  (jpg, png, jpeg) max 500kb
                </span>
              </p>
              <label
                htmlFor="aktif3"
                className="text-xs font-semibold w-40 p-2 border-none bg-primary text-center text-white rounded-xl cursor-pointer"
              >
                Unggah
              </label>
              <input
                type="file"
                id="aktif3"
                className="h-10 rounded-xl bg-white w-40 px-3 hidden"
                onChange={aktifOnChange3}
              />

              {aktifPreview3 && (
                <div className="w-fit relative mt-5">
                  <img
                    src={aktifPreview3}
                    alt=""
                    className="h-full w-28 object-cover object-center rounded-lg z-20 "
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-red-600 rounded-full  w-5 h-5 flex items-center justify-center cursor-pointer"
                    onClick={removeAktif3}
                  >
                    <p className=" text-white">x</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-red-700 mt-3">
            Upload Abstrak dibawah ini sebelum submit pendaftaran !
          </p>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/1Xh6mtChpEOW2CIYVGOo9dwIIJTOyg-tvLHP8Nwr-dYg/viewform?edit_requested=true"
              )
            }
            target="_blank"
            className="text-xs font-semibold w-40 p-2 border-none mb-5 bg-primary text-center text-white rounded-xl cursor-pointer"
          >
            Upload Abstrak
          </button>
          <ButtonSubmit submitHandler={pendaftaranHandler} isLoading={isLoading} />
          {/* <div>
            <p className="text-primary text-xs font-semibold">
              Biaya Pendaftaran Rp. 100.000,-/Tim
            </p>
            <p className="text-primary text-xs font-semibold">Nomor Rekening Pembayaran:</p>
            <p className="text-primary text-xs font-semibold">
              1554-01-001512-53-3 a.n. Mathematics Event (BRI)
            </p>
          </div> */}
          {showAlert && <Alert title={alertDesc} />}

          {/* <Notes /> */}
        </div>
        {showModal && (
          <DaftarModal
            title="Pendaftaran Mahasiswa berhasil dilakukan"
            closeHandler={closeHandler}
          />
        )}
      </div>
    </>
  );
};

export default PendaftaranLkti;
