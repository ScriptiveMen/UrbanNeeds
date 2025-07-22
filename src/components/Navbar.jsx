import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="w-full fixed top-0 left-0  z-[99] md:py-10 md:px-15  p-5  flex items-center justify-between
    "
    >
      <div className="logo bg-white md:w-40 w-25">
        <img
          className="h-full w-full object-cover"
          src="/images/URBAN_NEEDS_lOGO.png"
          alt=""
        />
      </div>

      <div className="hamburger w-7 h-7 rounded-full bg-black flex items-center justify-center md:hidden text-white">
        <i className="ri-menu-5-line"></i>
      </div>
    </div>
  );
};

export default Navbar;
