import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DaftarModal = ({ id, closeHandler, title }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("daftarmodal").showModal();
  }, []);

  return (
    <dialog id={"daftarmodal"} className="modal py-10">
      <div className="modal-box bg-white flex flex-col items-center">
        <p className="py-4 font-bold">{title}</p>
        <p>askdjah</p>
        <div className="modal-action flex flex-wrap justify-center gap-2">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn text-xs" onClick={closeHandler}>
            Daftar Instansi Lain
          </button>
          <button className="btn text-xs" onClick={() => navigate("/pendaftaran/siswa")}>
            Daftar Peserta SMA
          </button>
          <button className="btn text-xs" onClick={() => navigate("/pendaftaran/mahasiswa")}>
            Daftar Peserta Mahasiswa
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DaftarModal;
