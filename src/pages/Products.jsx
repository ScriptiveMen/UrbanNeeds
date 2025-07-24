import React from "react";
import Card from "../components/Card";
import ScrollingText from "../components/ScrollingText";
import String from "../components/String";

const Products = () => {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-30">
      <div className="heading relative px-5 md:px-15  flex flex-col items-start gap-4">
        <p className="text-gray-500 font-thin text-sm md:text-xl">
          Refined basics crafted with precision, comfort, and purpose in mind.
        </p>
        <div className="main-head pb-20 md:pb-40">
          {["Modern ", "Uniforms for", "New Generation"].map((head, index) => {
            return (
              <h1
                key={index}
                className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-black"
              >
                {head}
              </h1>
            );
          })}
        </div>

        <div className="absolute bottom-0 w-[90%] md:w-full">
          <String color={"black"} />
        </div>
      </div>

      <div className="products px-5 md:px-15 flex flex-col gap-3 md:gap-5">
        <div className="sec1 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Blokecore
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="sec2 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Half Sleeved Raglan Tee
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="sec3 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Raglan Tee
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="sec4 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Linen Pants
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="sec5 flex flex-col gap-2">
          <h1 className="capitalize text-2xl  md:text-4xl font-bold pb-2 md:pb-5">
            Block Haters w/ Shades
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div className="h-[30vh] px-5 md:px-15  flex items-center">
        <h2 className="md:text-4xl text-2xl">
          "Comfort is our signature." -{" "}
          <span className="text-xl md:text-2xl text-gray-400">urban needs</span>
        </h2>
      </div>
    </div>
  );
};

export default Products;
