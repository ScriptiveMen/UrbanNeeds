import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/UsersAction";

const SideMenus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const linkClasses =
    "text-xl font-thin tracking-tight relative group overflow-hidden";

  const spanClasses =
    "inline-block  px-1 text-left group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300 ease-out";

  const underlineClasses =
    "absolute left-1 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-in-out";

  const loginButtonClasses =
    "bg-white text-black w-full text-center py-2 rounded-full hover:scale-95 mix-blend-normal";

  const user = useSelector((state) => state.userReducer.users);
  const logoutHandler = async () => {
    await dispatch(asyncLogoutUser());
    navigate("/");
  };

  return (
    <div>
      <div className="links hidden fixed z-[99] md:flex flex-col gap-2 items-start top-10 mix-blend-difference text-white right-6">
        <NavLink className={linkClasses} to={"/"}>
          <span className={spanClasses}>Home</span>
          <span className={underlineClasses}></span>
        </NavLink>

        <NavLink className={linkClasses} to={"/cart"}>
          <span className={spanClasses}>Cart</span>
          <span className={underlineClasses}></span>
        </NavLink>

        <NavLink className={linkClasses} to={"/products"}>
          <span className={spanClasses}>Products</span>
          <span className={underlineClasses}></span>
        </NavLink>

        {user && (
          <NavLink className={linkClasses} to={"/profile"}>
            <span className={spanClasses}>Profile</span>
            <span className={underlineClasses}></span>
          </NavLink>
        )}

        <NavLink className={linkClasses} to={"/about"}>
          <span className={spanClasses}>About Us</span>
          <span className={underlineClasses}></span>
        </NavLink>

        <NavLink className={linkClasses} to={"/policy"}>
          <span className={spanClasses}>Our Policies</span>
          <span className={underlineClasses}></span>
        </NavLink>
        <NavLink className={linkClasses} to={"/contact"}>
          <span className={spanClasses}>Contact</span>
          <span className={underlineClasses}></span>
        </NavLink>

        {user ? (
          <>
            <NavLink onClick={logoutHandler} className={loginButtonClasses}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/login"} className={loginButtonClasses}>
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default SideMenus;
