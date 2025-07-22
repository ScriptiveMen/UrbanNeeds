import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const earthRef = useRef(null);

  useEffect(() => {
    gsap.to(earthRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  });

  return (
    <div className=" w-full bg-black text-white pt-10 flex flex-col gap-20">
      <div className="top  p-8 flex flex-col md:flex-row-reverse md:justify-between md:px-25 gap-20">
        <div className="top  flex flex-col items-start md:items-end">
          <h4 className="py-2 font-thin text-[#D8FF07] md:text-right md:text-2xl">
            Get in touch
          </h4>
          <h1 className="text-2xl py-[0.5]  pt-0 md:pt-2 border-b-2 w-max md:text-4xl md:text-right">
            customer@urbanneeds.in
          </h1>
          <h1 className="text-2xl py-[0.5]  pt-2 md:pt-4 border-b-2 w-max md:text-4xl md:text-right">
            +91-7814877642
          </h1>
        </div>
        <div className="bottom font-thin flex gap-15 ">
          <div className="left  p-3">
            <h4 className="py-2 text-[#D8FF07] md:text-xl">Follow us</h4>
            <ul className="list-none flex flex-col gap-2">
              <li className="md:text-xl font-thin">Awwwards</li>
              <li className="md:text-xl font-thin">Linkedin</li>
              <li className="md:text-xl font-thin">Instagram</li>
              <li className="md:text-xl font-thin">Facebook</li>
            </ul>
          </div>
          <div className="right  p-3">
            <h4 className="py-2 text-[#D8FF07] md:text-xl">Navigation</h4>
            <ul className="list-none flex flex-col gap-2">
              <li className="md:text-xl font-thin">Home</li>
              <li className="md:text-xl font-thin">About us</li>
              <li className="md:text-xl font-thin">Products</li>
              <li className="md:text-xl font-thin">Our Policies</li>
              <li className="md:text-xl font-thin">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="bottom h-full px-8 md:px-25  text-gray-300  flex items-center justify-between">
          <div className="pt-1 text-sm md:text-lg">Urban Needs&reg; Brand</div>
          <div className="flex items-center justify-center gap-1">
            <i
              ref={earthRef}
              className="ri-global-line text-xl md:text-2xl text-white"
            ></i>
            <p className="pt-1 text-sm md:text-lg">Based in India</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-8">
          <p className="text-sm md:text-lg">All rights reserved | 2025</p>
          <p className="border-b w-max text-sm">Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
