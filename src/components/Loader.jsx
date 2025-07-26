import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Loader = ({ setShowLoader }) => {
  const [load, setload] = useState(0);

  useGSAP(() => {
    gsap.from(".image img", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.3,
      duration: 3,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.to(".loader-screen", {
      y: "-100%",
      backgroundColor: "black",
      duration: 1,
      ease: "power4.inOut",
      delay: 3,
      onComplete: () => setShowLoader(false),
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setload((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen loader-screen w-screen relative bg-white">
      <div className="md:h-[60%]  h-[65%] w-[90%] md:w-[50%]  absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="image w-full h-full relative">
          <div className="md:w-[25%] w-[40%] h-[30%] md:h-[50%]  z-[1] absolute md:top-[40%] md:left-[40%] top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="./images/load-4.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[25%] md:h-[50%] w-[40%] h-[30%]   z-[6] absolute md:top-[60%] md:left-[66%] top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="./images/load-2.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[20%] md:h-[40%] w-[35%] h-[25%]  z-[7] absolute md:top-[75%] md:left-[50%] top-[63%] left-[45%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="./images/load-3.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[20%] md:h-[40%] w-[35%] h-[25%]  absolute md:top-[80%] md:left-[30%] top-[65%] left-[20%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="./images/load-6.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[20%] md:h-[40%] w-[35%] h-[25%]  z-[7] absolute md:top-[20%] md:left-[60%] top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="./images/load-5.jpg"
              alt=""
            />
          </div>
          <div className="md:w-[20%] md:h-[40%] w-[35%] h-[25%]  absolute top-[30%] md:right-[3%] -right-[15%] -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="./images/load-1.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="text">
          <h1 className="uppercase stroke-text md:text-[8vw] text-[15vw] absolute md:-top-10 md:left-0 -top-5 left-1/2 -translate-x-1/2 font-black">
            Urban
          </h1>
          <h1 className="uppercase stroke-text md:text-[8vw] text-[15vw] absolute md:-bottom-10 md:left-full bottom-5 left-1/2 -translate-x-1/2 font-black">
            Needs
          </h1>
        </div>
      </div>

      <div className="loader w-full md:px-20 px-10 md:pt-4 absolute left-0 md:bottom-0 bottom-15 gap-10 flex  items-center justify-between">
        <div className="loading w-full h-1 bg-gray-300">
          <div
            className="progress h-full bg-black"
            style={{ width: `${load}%` }}
          ></div>
        </div>
        <p className="md:text-[6vw] text-[10vw] text-gray-900 font-black flex items-baseline">
          {load} <span className="text-[2vw] text-gray-500">%</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
