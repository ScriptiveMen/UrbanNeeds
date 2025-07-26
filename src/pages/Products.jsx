import React from "react";
import Card from "../components/Card";
import String from "../components/String";

const Products = () => {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-30 overflow-hidden">
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
            <Card
              imgSrc={"/images/blokecore-brown.webp"}
              title={"Blokecore Polo - Sky Brew "}
              price={"Rs. 1,999.00"}
            />

            <Card
              imgSrc={"/images/blokecore-green.webp"}
              title={"Blokecore Polo - Game Green "}
              price={"Rs. 1,999.00"}
            />

            <Card
              imgSrc={"/images/blokecore-red.webp"}
              title={"Blokecore Polo - Race Red "}
              price={"Rs. 1,999.00"}
            />
            <Card
              imgSrc={"/images/blokecore-plum.webp"}
              title={"Blokecore Polo - Pacer Plum "}
              price={"Rs. 1,999.00"}
            />
          </div>
        </div>

        <div className="sec2 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Half Sleeved Raglan Tee
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card
              imgSrc={"/images/hs-blue.webp"}
              title={"Half Sleeved Raglan Tee - Sky Blue "}
              price={"Rs. 1,122.00"}
            />
            <Card
              imgSrc={"/images/hs-purple.webp"}
              title={"Half Sleeved Raglan Tee - Eggplant Purple "}
              price={"Rs. 1,122.00"}
            />
            <Card
              imgSrc={"/images/hs-brown.webp"}
              title={"Half Sleeved Raglan Tee - Brown "}
              price={"Rs. 1,122.00"}
            />
            <Card
              imgSrc={"/images/hs-olive.webp"}
              title={"Half Sleeved Raglan Tee - Olive "}
              price={"Rs. 1,122.00"}
            />
          </div>
        </div>

        <div className="sec3 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Raglan T-Shirt
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card
              imgSrc={"/images/rt-black.jpg"}
              title={"Raglan T-Shirt - Black "}
              price={"Rs. 1,234.00"}
            />
            <Card
              imgSrc={"/images/rt-blue.jpg"}
              title={"Raglan T-Shirt - Electric Blue "}
              price={"Rs. 1,234.00"}
            />
            <Card
              imgSrc={"/images/rt-olive.jpg"}
              title={"Raglan T-Shirt - Olive "}
              price={"Rs. 1,234.00"}
            />
            <Card
              imgSrc={"/images/rt-purple.jpg"}
              title={"Raglan T-Shirt - Plum "}
              price={"Rs. 1,234.00"}
            />
          </div>
        </div>

        <div className="sec4 flex flex-col gap-2">
          <h1 className="capitalize text-2xl md:text-4xl font-bold pb-2 md:pb-5">
            Linen Pants
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card
              imgSrc={"/images/lp-white.jpg"}
              title={"Linen Pant - Off White"}
              price={"Rs. 1,999.00"}
            />
            <Card
              imgSrc={"/images/lp-oat.jpg"}
              title={"Linen Pant - Oatmeal"}
              price={"Rs. 1,999.00"}
            />
            <Card
              imgSrc={"/images/lp-black.jpg"}
              title={"Linen Pant - Black"}
              price={"Rs. 1,999.00"}
            />
            <Card
              imgSrc={"/images/lp-vw.jpg"}
              title={"Linen Pant - Vanila White"}
              price={"Rs. 1,999.00"}
            />
          </div>
        </div>

        <div className="sec5 flex flex-col gap-2">
          <h1 className="capitalize text-2xl  md:text-4xl font-bold pb-2 md:pb-5">
            Everyday Oversized Tees
          </h1>
          <div className="cards h-full w-full px-5 flex flex-col md:flex-row flex-wrap items-center justify-center md:gap-y-10 md:gap-x-20">
            <Card
              imgSrc={"/images/card2.webp"}
              title={"Oversized Tee - Black"}
              price={"Rs. 899.00"}
            />
            <Card
              imgSrc={"/images/card1.webp"}
              title={"Oversized Tee - Jungle Green"}
              price={"Rs. 899.00"}
            />
            <Card
              imgSrc={"/images/card3.webp"}
              title={"Oversized Tee - Cold Coffee"}
              price={"Rs. 899.00"}
            />
            <Card
              imgSrc={"/images/card4.webp"}
              title={"Oversized Tee - Electric Blue"}
              price={"Rs. 899.00"}
            />
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
