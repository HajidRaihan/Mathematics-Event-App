import React, { useState } from "react";

const ButtonSubmit = ({ submitHandler, isLoading }) => {
  console.log(isLoading);
  return (
    <div className="relative w-fit">
      <button
        className="text-xs rounded-lg disabled:opacity-70 border-2 border-primary h-8  w-40 font-semibold text-primary"
        onClick={submitHandler}
        disabled={isLoading}
      >
        Submit
      </button>
      {isLoading && (
        <span className="loading loading-spinner text-primary loading-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      )}
    </div>
  );
};

export default ButtonSubmit;
