import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/UsersAction";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hammenu = useRef(null);
  const tl = useRef(null);
  const isAnimating = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.users);

  const linkClasses =
    "text-xl font-thin tracking-tight relative group overflow-hidden";
  const spanClasses =
    "inline-block px-1 text-left group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300 ease-out";
  const underlineClasses =
    "absolute left-1 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-in-out";
  const loginButtonClasses =
    "bg-white text-black w-full text-center py-2 rounded-full hover:scale-95 mix-blend-normal";

  // Init Timeline
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(hammenu.current, {
        right: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(
        hammenu.current.querySelectorAll(".links a"),
        {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "<"
      );
  }, []);

  // Trigger open/close animations
  useEffect(() => {
    if (!tl.current) return;

    if (isOpen && !isAnimating.current) {
      isAnimating.current = true;
      tl.current.play().then(() => {
        isAnimating.current = false;
      });
    } else if (!isOpen && !isAnimating.current) {
      isAnimating.current = true;
      tl.current.reverse().then(() => {
        isAnimating.current = false;
      });
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    if (isAnimating.current) return;
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  const handleLogout = async () => {
    if (isAnimating.current) return;
    setIsOpen(false);
    setTimeout(async () => {
      await dispatch(asyncLogoutUser());
      navigate("/");
    }, 500);
  };

  const handleToggleMenu = () => {
    if (isAnimating.current) return;
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    if (isAnimating.current) return;
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-[99] md:py-10 md:px-15 p-5 flex items-center justify-between">
        <div className="logo bg-white md:w-40 w-25">
          <img
            className="h-full w-full object-cover"
            src="/images/URBAN_NEEDS_lOGO.png"
            alt="Urban Needs Logo"
          />
        </div>
        <div
          onClick={handleToggleMenu}
          className="hamburger w-7 h-7 rounded-full bg-black flex items-center justify-center md:hidden text-white"
        >
          <i className="ri-menu-5-line"></i>
        </div>
      </div>

      <div
        ref={hammenu}
        className="fixed md:hidden top-0 right-[-100%] w-full h-screen bg-[#16171A] text-white z-[998] p-5"
      >
        <div className="w-full flex items-center justify-end">
          <div
            onClick={handleCloseMenu}
            className="hamburger w-7 h-7 rounded-full bg-black flex items-center justify-center text-white"
          >
            <i className="ri-close-fill"></i>
          </div>
        </div>

        <div className="h-full w-full pt-10 pl-9 pr-3">
          <p className="py-3">Menu</p>

          <div className="links flex flex-col gap-5 py-9 border-b-[0.5px] border-t-[0.5px] border-gray-500">
            <NavLink
              onClick={() => handleNavigation("/")}
              className={linkClasses}
            >
              <span className={spanClasses}>Home</span>
              <span className={underlineClasses}></span>
            </NavLink>

            <NavLink
              onClick={() => handleNavigation("/cart")}
              className={linkClasses}
            >
              <span className={spanClasses}>Cart</span>
              <span className={underlineClasses}></span>
            </NavLink>

            <NavLink
              onClick={() => handleNavigation("/products")}
              className={linkClasses}
            >
              <span className={spanClasses}>Products</span>
              <span className={underlineClasses}></span>
            </NavLink>

            {/* Profile Always Mounted but Conditionally Visible */}
            <NavLink
              onClick={() => handleNavigation("/profile")}
              className={`${linkClasses} ${user ? "block" : "hidden"}`}
            >
              <span className={spanClasses}>Profile</span>
              <span className={underlineClasses}></span>
            </NavLink>

            <NavLink
              onClick={() => handleNavigation("/about")}
              className={linkClasses}
            >
              <span className={spanClasses}>About Us</span>
              <span className={underlineClasses}></span>
            </NavLink>

            <NavLink
              onClick={() => handleNavigation("/policy")}
              className={linkClasses}
            >
              <span className={spanClasses}>Our Policies</span>
              <span className={underlineClasses}></span>
            </NavLink>

            <NavLink
              onClick={() => handleNavigation("/contact")}
              className={linkClasses}
            >
              <span className={spanClasses}>Contact</span>
              <span className={underlineClasses}></span>
            </NavLink>

            {user ? (
              <NavLink onClick={handleLogout} className={loginButtonClasses}>
                Logout
              </NavLink>
            ) : (
              <NavLink
                onClick={() => handleNavigation("/login")}
                className={loginButtonClasses}
              >
                Login
              </NavLink>
            )}
          </div>

          <div className="w-full py-10 flex items-center justify-between">
            <span className="text-sm">Linkedin</span>
            <span className="text-sm">Instagram</span>
            <span className="text-sm">Facebook</span>
            <span className="text-sm">Awwwards</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
