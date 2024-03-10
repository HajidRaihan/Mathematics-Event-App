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

  // function generateRandomString(length) {
  //   let result = "";
  //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  // Example usage:
  // const randomString = generateRandomString(8); // Generates a random string of length 10
  // console.log(randomString);
  // console.log({ username });

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
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-5">
          <InputForm
            label={"username"}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <InputForm
            label={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
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
