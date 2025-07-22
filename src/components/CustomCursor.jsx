import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.x,
        y: e.y,
        duration: 0.8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor md:block hidden z-[100] h-4 w-4 rounded-full bg-[#D8FF07] fixed top-0 left-0 pointer-events-none"
    ></div>
  );
};

export default CustomCursor;
