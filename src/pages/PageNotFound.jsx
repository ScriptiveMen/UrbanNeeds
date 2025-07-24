import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import String from "../components/String";
import gsap from "gsap";

const PageNotFound = () => {
  const underscore = useRef(null);
  useEffect(() => {
    if (underscore.current) {
      gsap.fromTo(
        underscore.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    }
  }, []);
  return (
    <div className="min-h-screen w-full bg-black  pt-20 md:pt-30">
      <div className="flex flex-col items-start justify-center gap-5 pb-20 md:pb-30">
        <div className="left relative  w-full px-5 md:px-15  flex flex-col items-start gap-4">
          <p className="text-white font-thin text-sm md:text-xl">
            Maybe it slipped off the hanger?
          </p>
          <div className="main-head pb-20 md:pb-40">
            <h1 className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-white">
              404 <span ref={underscore}>_</span> <br />
              Page Not Found
            </h1>
          </div>
          <div className="absolute bottom-0 w-[90%] md:w-full">
            <String />
          </div>
        </div>

        <div className="w-full px-5 md:px-15 flex flex-col">
          <p className="text-2xl text-white  md:text-3xl leading-9 md:leading-15  font-thin my-5 md:w-[90%]">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>

          <Button title={"Back to Home"} color={"#D8FF07"} />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
