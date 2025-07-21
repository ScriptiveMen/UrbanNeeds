import React from "react";
import { NavLink } from "react-router-dom";

const SideMenus = () => {
  return (
    <div>
      <div className="links hidden fixed md:flex flex-col gap-2 items-start top-10 mix-blend-difference text-white right-10">
        <NavLink className={`text-2xl font-thin`} to={"/"}>
          Home
        </NavLink>
        <NavLink className={`text-2xl font-thin`} to={"/about"}>
          About Us
        </NavLink>
        <NavLink className={`text-2xl font-thin`} to={"/products"}>
          Products
        </NavLink>
        <NavLink className={`text-2xl font-thin`} to={"/policy"}>
          Our Policies
        </NavLink>
        <NavLink className={`text-2xl font-thin`} to={"/contact"}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenus;
