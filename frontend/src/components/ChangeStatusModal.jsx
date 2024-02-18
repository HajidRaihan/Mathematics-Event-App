import React, { useEffect } from "react";
import ChangeStatus from "./ChangeStatus";

const ChangeStatusModal = ({ close, id }) => {
  useEffect(() => {
    document.getElementById("status").showModal();
    console.log("ini id", id);
  }, []);
  return (
    <dialog id={"status"} className="modal py-10 text-black">
      <div className="modal-box bg-white flex flex-col items-center">
        <p className="py-4 font-bold text-lg">Ganti Status</p>
        <ChangeStatus id={id} />
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={close}>
            Selesai
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ChangeStatusModal;
