import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hammenu = useRef(null);
  const tl = useRef(null);
  const isAnimating = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  // GSAP timeline
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(hammenu.current, {
        right: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(
        hammenu.current.querySelectorAll(".links div"),
        {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "<"
      );
  }, []);

  // Animate open/close
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

  // Auto-close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle link navigation with animation delay
  const handleNavigation = (path) => {
    if (isAnimating.current) return;

    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 500); // match timeline duration
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
          onClick={() => setIsOpen(true)}
          className="hamburger w-7 h-7 rounded-full bg-black flex items-center justify-center md:hidden text-white"
        >
          <i className="ri-menu-5-line"></i>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div
        ref={hammenu}
        className="fixed md:hidden top-0 right-[-100%] w-full h-screen bg-[#16171A] text-white z-[998] p-5"
      >
        <div className="w-full flex items-center justify-end">
          <div
            onClick={() => setIsOpen(false)}
            className="hamburger w-7 h-7 rounded-full bg-black flex items-center justify-center text-white"
          >
            <i className="ri-close-fill"></i>
          </div>
        </div>

        <div className="h-full w-full pt-10 pl-9 pr-3">
          <p className="py-3">Menu</p>

          <div className="links flex flex-col gap-5 py-9 border-b-[0.5px] border-t-[0.5px] border-gray-500">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "Cart", path: "/cart" },
              { name: "About Us", path: "/about" },
              { name: "Our Policies", path: "/policy" },
              { name: "Contact", path: "/contact" },
              { name: "Login", path: "/login" },
            ].map((link, i) => (
              <div
                key={i}
                onClick={() => handleNavigation(link.path)}
                className="text-2xl font-thin cursor-pointer"
              >
                {link.name}
              </div>
            ))}
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
