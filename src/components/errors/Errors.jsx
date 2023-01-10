import React from "react";

const Errors = ({message}) => {
  return (
    <div className="text-center bg-red-800 p-3 mb-5 rounded-md">
      <p className=" font-bold uppercase text-white ">
        {message}
      </p>
    </div>
  );
};

export default Errors;
