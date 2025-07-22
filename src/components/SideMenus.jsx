import React from "react";
import { NavLink } from "react-router-dom";

const SideMenus = () => {
  return (
    <div>
      <div className="links hidden fixed z-[99] md:flex flex-col gap-2 items-start top-10 mix-blend-difference text-white right-6">
        <NavLink className={`text-2xl font-thin tracking-tight`} to={"/"}>
          Home
        </NavLink>
        <NavLink className={`text-2xl font-thin tracking-tight`} to={"/about"}>
          About Us
        </NavLink>
        <NavLink
          className={`text-2xl font-thin tracking-tight`}
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink className={`text-2xl font-thin tracking-tight`} to={"/policy"}>
          Our Policies
        </NavLink>
        <NavLink
          className={`text-2xl font-thin tracking-tight`}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenus;
