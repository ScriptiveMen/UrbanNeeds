import React from "react";

const Button = ({ title, color }) => {
  return (
    <>
      <div
        className={`px-5 py-3 my-8 md:my-10 bg-white w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg`}
      >
        {title}
        <div className={`circle h-4 w-4 rounded-full bg-[${color}]`}></div>
      </div>
    </>
  );
};

export default Button;
