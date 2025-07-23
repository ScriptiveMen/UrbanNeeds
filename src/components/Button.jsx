import gsap from "gsap";
import React, { useRef } from "react";

const Button = ({ title, color }) => {
  const buttonRef = useRef(null);

  const addAnimation = () => {
    gsap.to(buttonRef.current, {
      scaleX: 1.05, // slightly increase width
      backgroundColor: color,
      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2)`,
      color: "#111",
      border: `2px solid ${color}`,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const removeAnimation = () => {
    gsap.to(buttonRef.current, {
      scaleX: 1,
      backgroundColor: "#fff",
      boxShadow: "none",
      color: "#000",
      border: "2px solid #000",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={buttonRef}
      onMouseEnter={addAnimation}
      onMouseLeave={removeAnimation}
      className="button px-5 py-3 my-8 md:my-10 bg-white w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg border-2 border-black origin-center"
    >
      {title}
      <div
        className="circle h-4 w-4 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Button;
