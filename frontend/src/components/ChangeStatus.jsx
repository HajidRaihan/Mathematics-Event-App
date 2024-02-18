import axios from "axios";
import React, { useState } from "react";
import { RequestApi } from "../helper/RequestApi";

const ChangeStatus = ({ id }) => {
  const [status, setStatus] = useState("pilih status");
  const changeStatusHandler = async (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
    const data = {
      status: e.target.value,
    };
    console.log(data);
    console.log({ id });

    try {
      const response = await axios({
        method: "PUT",
        url: `http://localhost:8000/api/siswa/${id}`,
        data,
        headers: {
          "Content-Type": "aplication/json",
        },
      });

      if (response.data.status === "true") {
        window.location.reload();
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <select
        className="select select-bordered w-full max-w-xs"
        value={status}
        onChange={changeStatusHandler}
      >
        <option disabled>pilih status</option>
        <option value={"belum lunas"}>Belum lunas</option>
        <option value={"lunas"}>Lunas</option>
      </select>
    </div>
  );
};

export default ChangeStatus;
