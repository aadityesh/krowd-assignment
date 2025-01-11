import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-[#4CD964] p-2 text-xl font-semibold border-black border shadow-md">
      {label}
    </button>
  );
};

export default Button;
