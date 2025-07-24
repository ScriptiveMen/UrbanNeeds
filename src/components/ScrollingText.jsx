import gsap from "gsap";
import React, { useEffect } from "react";

const ScrollingText = () => {
  const useScrollAnimation = () => {
    useEffect(() => {
      let touchStartY = 0;

      const handleWheel = (e) => {
        if (e.deltaY > 0) {
          gsap.to(".marquee", {
            transform: "translateX(-200%)",
            duration: 6,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".marquee img", { rotate: 180 });
        } else {
          gsap.to(".marquee", {
            transform: "translateX(0%)",
            duration: 6,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".marquee img", { rotate: 0 });
        }
      };

      const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchMove = (e) => {
        const touchEndY = e.touches[0].clientY;
        if (touchStartY - touchEndY > 10) {
          // swipe up
          gsap.to(".marquee", {
            transform: "translateX(-200%)",
            duration: 6,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".marquee img", { rotate: 180 });
        } else if (touchEndY - touchStartY > 10) {
          // swipe down
          gsap.to(".marquee", {
            transform: "translateX(0%)",
            duration: 6,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".marquee img", { rotate: 0 });
        }
      };

      window.addEventListener("wheel", handleWheel);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      };
    }, []);
  };
  useScrollAnimation();
  return (
    <section className="txt h-[20vh] md:h-[25vh] bg-[#D8FF07] flex overflow-hidden">
      <div className="marquee shrink-0 -translate-x-full pl-8 text-black flex items-center gap-7">
        <h1 className="text-5xl md:text-7xl ">Crafting Better Fits</h1>
        <img
          className="h-[50px] md:h-[100px]"
          src="/images/arrow-br.svg"
          alt=""
        />
      </div>
      <div className="marquee shrink-0 -translate-x-full pl-8 text-black flex items-center gap-7">
        <h1 className="text-5xl md:text-7xl ">Crafting Better Fits</h1>
        <img
          className="h-[50px] md:h-[100px]"
          src="/images/arrow-br.svg"
          alt=""
        />
      </div>
      <div className="marquee shrink-0 -translate-x-full pl-8 text-black flex items-center gap-7">
        <h1 className="text-5xl md:text-7xl ">Crafting Better Fits</h1>
        <img
          className="h-[50px] md:h-[100px]"
          src="/images/arrow-br.svg"
          alt=""
        />
      </div>
      <div className="marquee shrink-0 -translate-x-full pl-8 text-black flex items-center gap-7">
        <h1 className="text-5xl md:text-7xl ">Crafting Better Fits</h1>
        <img
          className="h-[50px] md:h-[100px]"
          src="/images/arrow-br.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default ScrollingText;
