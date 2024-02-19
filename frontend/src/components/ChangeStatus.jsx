import axios from "axios";
import React, { useState } from "react";
import { RequestApi } from "../helper/RequestApi";

const ChangeStatus = ({ id, status, onChange }) => {
  return (
    <div>
      <select className="select select-bordered w-full max-w-xs" value={status} onChange={onChange}>
        <option disabled>pilih status</option>
        <option value={"belum lunas"}>Belum lunas</option>
        <option value={"lunas"}>Lunas</option>
      </select>
    </div>
  );
};

export default ChangeStatus;
