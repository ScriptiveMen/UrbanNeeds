import gsap from "gsap";
import React, { useEffect } from "react";

const String = ({ color }) => {
  useEffect(() => {
    const originalPath = `M 0 80 Q 500 80 1000 80`;

    const handleMouseMove = (e) => {
      const string = e.currentTarget;
      const path = string.querySelector("path");
      const rect = string.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 1000;
      const y = ((e.clientY - rect.top) / rect.height) * 160 * 1.5;

      const newPath = `M 0 80 Q ${x} ${y} 1000 80`;
      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = (e) => {
      const path = e.currentTarget.querySelector("path");
      gsap.to(path, {
        attr: { d: originalPath },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      });
    };

    const strings = document.querySelectorAll(".string");
    strings.forEach((string) => {
      string.addEventListener("mousemove", handleMouseMove);
      string.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      strings.forEach((string) => {
        string.removeEventListener("mousemove", handleMouseMove);
        string.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="string md:w-[80%] h-[15vh] md:h-[27vh] flex items-center justify-start">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 80 Q 500 80 1000 80"
          stroke={`${color || "#fff"}`}
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default String;
