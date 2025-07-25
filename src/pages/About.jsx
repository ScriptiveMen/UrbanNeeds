import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import String from "../components/String";
import Button from "../components/Button";

const About = () => {
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.from(paraRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-black  pt-20 md:pt-30 overflow-hidden">
      <div className="flex flex-col items-start justify-center gap-5 pb-20 md:pb-30">
        <div className="left relative  w-full px-5 md:px-15  flex flex-col items-start gap-4">
          <p className="text-white font-thin text-sm md:text-xl">
            Built from passion, powered by purpose
          </p>
          <div className="main-head pb-20 md:pb-40">
            <h1 className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-white">
              This Is <br className="md:hidden" /> Who We Are
            </h1>
          </div>
          <div className="absolute bottom-0 w-[90%] md:w-full">
            <String />
          </div>
        </div>

        <div className="w-full px-5 md:px-15 flex flex-col">
          <p
            ref={paraRef}
            className="text-2xl text-white  md:text-5xl leading-9 md:leading-15  font-thin my-5 md:w-[90%]"
          >
            We aim at providing the Indian GenZ with the coolest clothing at
            affordable prices without compromising on quality! URBAN NEEDS
            MERCANTILE Originated in 2022 by San Kalra, as merchandise for his
            BeYourBest YouTube subscribers and sankalra Instagram followers,
            Urban Needs brand provides the urban GenZ with their style
            necessities. We make street style pieces designed to give you the
            fashionable edge at affordable prices! Wear it in your college, for
            brunch, lunch, dinner, at the cafe, or at the mall - wherever you
            like! These are NEEDS! Urban Needs India is a lifestyle products
            brand under parent company Auxo Entertainment.
          </p>

          <Button title={"Let's Shop"} color={"#D8FF07"} />
        </div>
      </div>
    </div>
  );
};

export default About;
