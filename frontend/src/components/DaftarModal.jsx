import React from "react";

const DaftarModal = ({ id }) => {
  return (
    <dialog id={id} className="modal py-10">
      {/* <div className="modal-box bg-white flex flex-col items-center">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Pendaftaran berhasil.</p>

        <div className="modal-action">
          <form method="dialog ">
            <div className="flex gap-3 flex-wrap justify-center">
            <button
              className="px-3 py-2 rounded-lg bg-primary text-white hover:opacity-60"
              onClick={() => close()}
            >
              Daftar Instansi Lain
            </button>
            <button className="px-3 py-2 rounded-lg bg-primary text-white hover:opacity-60">
              Daftar Siswa
            </button>
            <button className="px-3 py-2 rounded-lg bg-primary text-white hover:opacity-60">
              Daftar Mahasiswa
            </button>
            </div>
          </form>
        </div>
      </div> */}

      <div className="modal-box bg-white flex flex-col items-center">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Pendafaran Instansi Behasil dilakukan</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DaftarModal;
