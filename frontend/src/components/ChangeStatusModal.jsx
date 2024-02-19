import axios from "axios";
import React, { useEffect, useState } from "react";
import ChangeStatus from "./ChangeStatus";
import InputForm from "./InputForm";

const ChangeStatusModal = ({ close, id, url }) => {
  useEffect(() => {
    document.getElementById("status").showModal();
    console.log("ini id", id);
  }, []);

  const [status, setStatus] = useState("pilih status");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeStatusHandler = async (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  const createAccountHandler = async (e) => {
    e.preventDefault();

    const data = {
      status: status,
      username: username,
      password: password,
    };
    console.log(data);
    console.log({ id });

    try {
      const response = await axios({
        method: "PUT",
        url: `http://localhost:8000/api/${url}/${id}`,
        data,
        headers: {
          "Content-Type": "aplication/json",
        },
      });

      if (response.data.status === "true") {
      }
      window.location.reload();

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog id={"status"} className="modal py-10 text-black">
      <div className="modal-box bg-white flex flex-col items-center">
        <p className="py-4 font-bold text-lg">Ganti Status</p>
        <div className="flex flex-col gap-5">
          <InputForm label={"username"} onChange={(e) => setUsername(e.target.value)} />
          <InputForm label={"password"} onChange={(e) => setPassword(e.target.value)} />
          <ChangeStatus id={id} status={status} onChange={changeStatusHandler} />
        </div>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={createAccountHandler}>
            Selesai
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ChangeStatusModal;
