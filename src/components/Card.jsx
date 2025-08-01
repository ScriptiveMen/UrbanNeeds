import gsap from "gsap";
import React from "react";

const Card = ({ imgSrc, title, price }) => {
  const zoomImage = (e) => {
    const img = e.currentTarget;
    gsap.to(img, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const removeZoomImage = (e) => {
    const img = e.currentTarget;
    gsap.to(img, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-full md:w-[40%] flex flex-col rounded-4xl py-2">
      <div className="aspect-[4/5] rounded-4xl overflow-hidden w-full">
        <img
          onMouseEnter={zoomImage}
          onMouseLeave={removeZoomImage}
          className="h-full w-full object-cover"
          src={imgSrc}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between">
        <div className=" py-2 font-machina text-black flex flex-col gap-2">
          <h3 className="md:text-3xl text-xl font-semibold">{title}</h3>
          <p className="md:text-xl text-sm text-gray-600">{price}</p>
        </div>
        <div className="flex items-center md:justify-end justify-center">
          <div className="bg-black cursor-pointer  text-white w-max md:px-7 px-5  text-center py-2 rounded-full hover:scale-95 mix-blend-normal">
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
