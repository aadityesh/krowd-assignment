import React from "react";

const Navigation = ({ title }) => {
  return (
    <>
      <nav className="bg-black flex justify-center items-center p-2 text-[24px]">
        <img
          className="h-12 w-12"
          src="../../public/hackerrank.svg"
          alt="logo"
        />
        <span className="font-medium text-white">{title}</span>
      </nav>
    </>
  );
};

export default Navigation;
