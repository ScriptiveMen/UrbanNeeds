import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import ScrollingText from "../components/ScrollingText";
import String from "../components/String";

const Home = () => {
  const trendRef = useRef(null);
  const handleMouseEnter = () => {
    gsap.to(trendRef.current, {
      scaleX: 1.05,
      backgroundColor: "#D8FF07",
      boxShadow: "none",
      borderColor: "#D8FF07",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(trendRef.current, {
      scaleX: 1,
      backgroundColor: "#D8FF07", // stay the same
      boxShadow: "none",
      borderColor: "#000",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    gsap.from(".hero1 h1", {
      y: 40,
      opacity: 0,
      delay: 3.5,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3,
    });
  });

  const animateImg = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector(".hid-img");

    img.style.display = "block";
    gsap.fromTo(
      img,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    container.addEventListener("mousemove", moveImage);
  };

  const moveImage = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector(".hid-img");
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left - img.offsetWidth / 2;
    const y = e.clientY - rect.top - img.offsetHeight / 2;

    gsap.to(img, {
      x: x,
      y: y,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
    });
  };

  const removeAnimateImg = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector(".hid-img");

    gsap.to(img, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        img.style.display = "none";
      },
    });
  };

  const animateImgTrend = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector("img");

    img.style.display = "block";
    img.style.pointerEvents = "none"; // so it doesn’t block mouse events

    gsap.fromTo(
      img,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const moveImageTrend = (e) => {
    const container = e.currentTarget;
    const img = container.querySelector("img");

    const rect = container.getBoundingClientRect();
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    let x = e.clientX - rect.left - imgWidth / 2;
    let y = e.clientY - rect.top - imgHeight / 2;

    // Clamp to container bounds
    x = Math.max(0, Math.min(x, rect.width - imgWidth));
    y = Math.max(0, Math.min(y, rect.height - imgHeight));

    gsap.to(img, {
      x,
      y,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
    });
  };

  const removeImgTrend = (e) => {
    const img = e.currentTarget.querySelector("img");

    gsap.to(img, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        img.style.display = "none";
      },
    });
  };

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
    <div className="min-h-screen  w-screen realative overflow-hidden">
      <section className=" h-full w-full">
        <img
          className="h-full w-full object-cover"
          src="/images/newHero.jpg"
          alt=""
        />

        <div className="text hero1 absolute top-[2%] md:top-[5%] left-0 px-5 md:px-15 text-white mix-blend-difference  flex flex-col items-start justify-center gap-3 ">
          <h1 className="text-[15vw] leading-none font-semibold ">We</h1>
          <h1 className="text-[15vw] leading-none font-semibold ">Create</h1>
          <h1 className="text-[15vw] leading-none font-semibold ">Timeless</h1>
          <h1 className="text-[15vw] leading-none font-semibold ">
            Essentials
          </h1>
        </div>
      </section>

      <section className="hero2 pt-20 bg-black text-white w-full  rounded-tl-[4rem] rounded-tr-[4rem]">
        <div className="px-8 md:px-17">
          <h4 className="text-[#D8FF07] text-lg md:text-xl">What we do</h4>
          <p className="text-2xl md:text-5xl leading-9 md:leading-15 font-thin my-5 md:w-[70%]">
            At Urban Needs®, we create trendy, affordable streetwear tailored
            for the Indian GenZ. From statement-making college fits to chill
            cafe looks, we craft everyday essentials that never compromise on
            quality. We believe fashion should be effortless, accessible, and
            unapologetically YOU — because these aren’t just clothes, these are
            your daily needs.
          </p>
          <Button
            title={"Ready to level up your wardrobe?"}
            color={"#D8FF07"}
          />

          <String />
        </div>

        <section className="sec3 bg-black text-white   w-full">
          <div className="px-8 md:px-17 pb-10 md:pb-20">
            <div className="txt uppercase w-full flex flex-col md:pt-30 items-center justify-center">
              <h1 className="text-[10vw] leading-6 tracking-tighter">
                Featured
              </h1>
              <h1 className="text-[10vw] tracking-tighter">Drops</h1>
            </div>

            <div className="cards flex flex-col gap-10 md:gap-30">
              <div className="cards font-machina flex  flex-wrap md:flex-nowrap items-start justify-center gap-10 md:gap-20 w-full">
                <div className="w-full md:w-[40%] flex flex-col rounded-4xl ">
                  <div className="aspect-[4/5] rounded-4xl overflow-hidden w-full">
                    <img
                      onMouseEnter={zoomImage}
                      onMouseLeave={removeZoomImage}
                      className="h-full w-full object-cover"
                      src="/images/card1.webp"
                      alt=""
                    />
                  </div>
                  <div className=" py-2 text-white flex flex-col gap-2">
                    <h3 className="md:text-3xl text-xl font-semibold">
                      Oversized Tee - Jungle Green
                    </h3>
                    <p className="md:text-xl text-lg text-gray-400">Rs.899</p>
                  </div>
                </div>

                <div className="w-full md:w-[40%] flex flex-col rounded-2xl overflow-hidden">
                  <div className="aspect-[4/5]  rounded-4xl overflow-hidden w-full">
                    <img
                      onMouseEnter={zoomImage}
                      onMouseLeave={removeZoomImage}
                      className="h-full w-full rounded-4xl  object-cover"
                      src="/images/card2.webp"
                      alt=""
                    />
                  </div>
                  <div className=" py-2 text-white flex flex-col gap-2">
                    <h3 className="md:text-3xl text-xl font-semibold">
                      Oversized Tee - Black
                    </h3>
                    <p className="md:text-xl text-lg text-gray-400">Rs.899</p>
                  </div>
                </div>
              </div>

              <div className="cards font-machina flex  flex-wrap md:flex-nowrap items-start justify-center gap-10 md:gap-20 w-full">
                <div className="w-full md:w-[40%] flex flex-col rounded-2xl overflow-hidden">
                  <div className="aspect-[4/5] rounded-4xl overflow-hidden w-full">
                    <img
                      onMouseEnter={zoomImage}
                      onMouseLeave={removeZoomImage}
                      className="h-full w-full rounded-4xl object-cover"
                      src="/images/card3.webp"
                      alt=""
                    />
                  </div>
                  <div className=" py-4 text-white flex flex-col gap-2">
                    <h3 className="md:text-3xl text-xl font-semibold">
                      Oversized Tee - Pebble Grey
                    </h3>
                    <p className="md:text-xl text-lg text-gray-400">Rs.1029</p>
                  </div>
                </div>

                <div className="w-full md:w-[40%] flex flex-col rounded-2xl overflow-hidden">
                  <div className="aspect-[4/5] rounded-4xl overflow-hidden w-full">
                    <img
                      onMouseEnter={zoomImage}
                      onMouseLeave={removeZoomImage}
                      className="h-full w-full rounded-4xl object-cover"
                      src="/images/card4.webp"
                      alt=""
                    />
                  </div>
                  <div className=" py-2 text-white flex flex-col gap-2">
                    <h3 className="md:text-3xl text-xl font-semibold">
                      Oversized Tee - Electric Blue
                    </h3>
                    <p className="md:text-xl text-lg text-gray-400">Rs.999</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="low-head  md:px-30">
              <div className=" pt-20 flex flex-col md:flex-row items-start justify-between">
                <p className="text-2xl md:text-2xl leading-9 md:leading-9 font-thin w-full md:w-[50%]">
                  At Urban Needs, we’ve carved out our expertise in creating
                  fashion that speaks for itself. From bold streetwear to
                  timeless essentials, we craft clothing that helps you express
                  your style effortlessly. Our mission is simple — empower the
                  next-gen to break norms, lead trends, and make their mark
                  through fashion.
                </p>

                <Button title={"View more products"} color={"#D8FF07"} />
              </div>
              <String />
            </div>
          </div>

          <section className="sec4 pt-20 md:pt-60 bg-white w-full rounded-tl-[4rem] rounded-tr-[4rem]">
            <div className="txt uppercase  text-black flex flex-col items-center justify-center">
              <h1 className="text-[10vw] md:text-[8vw] leading-6 tracking-tighter">
                Where trends
              </h1>
              <h1 className="text-[10vw] md:text-[8vw] tracking-tighter">
                thrive
              </h1>
            </div>

            <div className="lines w-full   py-10 px-2  flex flex-col gap-1 items-end text-black ">
              <div
                onMouseMove={moveImageTrend}
                onMouseEnter={animateImgTrend}
                onMouseLeave={removeImgTrend}
                className="line relative w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400"
              >
                <h1 className="text-[6vw] md:text-[4vw] font-thin">
                  Linen pants
                </h1>
                <img
                  className="absolute w-[15%] object-cover aspect-square hidden z-50 rounded-xl pointer-events-none"
                  src="/images/linenpants.webp"
                  alt=""
                />
              </div>
              <div
                onMouseMove={moveImageTrend}
                onMouseEnter={animateImgTrend}
                onMouseLeave={removeImgTrend}
                className="line relative w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400"
              >
                <h1 className="text-[6vw] md:text-[4vw] font-thin">
                  raglan t-shirt
                </h1>
                <img
                  className="absolute w-[15%] object-cover aspect-square hidden z-50 rounded-xl pointer-events-none"
                  src="/images/rangalan.jpg"
                  alt=""
                />
              </div>
              <div
                onMouseMove={moveImageTrend}
                onMouseEnter={animateImgTrend}
                onMouseLeave={removeImgTrend}
                className="line relative w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400"
              >
                <h1 className="text-[6vw] md:text-[4vw] font-thin">
                  half sleeved raglan tee
                </h1>
                <img
                  className="absolute w-[15%] object-cover aspect-square hidden z-50 rounded-xl pointer-events-none"
                  src="/images/halfsleeved.webp"
                  alt=""
                />
              </div>
              <div
                onMouseMove={moveImageTrend}
                onMouseEnter={animateImgTrend}
                onMouseLeave={removeImgTrend}
                className="line relative w-[95%] object-cover md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400"
              >
                <h1 className="text-[6vw] md:text-[4vw] font-thin">
                  block haters w/ shades
                </h1>
                <img
                  className="absolute w-[15%] object-cover aspect-square hidden z-50 rounded-xl pointer-events-none"
                  src="/images/block.webp"
                  alt=""
                />
              </div>
            </div>

            <div
              ref={trendRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="px-5 py-3  m-auto bg-[#D8FF07] w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg"
            >
              Shop The Trend
              <div className="circle h-3 w-3 rounded-full bg-black"></div>
            </div>
          </section>

          <section className="sec5 pt-20  bg-white md:pt-60">
            <div className="txt uppercase pb-10  text-black flex flex-col items-center justify-center">
              <h1 className="text-[10vw] md:text-[8vw] leading-6 tracking-tighter">
                Latest Drops
              </h1>
            </div>

            <div className="w-full text-black px-10  py-4 md:py-15 flex flex-col items-center justify-center gap-7">
              <div
                onMouseEnter={animateImg}
                onMouseMove={moveImage}
                onMouseLeave={removeAnimateImg}
                className="card sky relative flex flex-col md:w-[85%] gap-4 border-t border-gray-300 py-8 md:flex-row items-center"
              >
                <div className="top md:w-1/2">
                  <div className="w-[100%] aspect-[1/1] rounded-2xl overflow-hidden md:absolute md:w-[20%] md:top-0  hid-img pointer-events-none z-50 md:hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/blokecore-brown.webp"
                      alt=""
                    />
                  </div>
                  <h2 className="uppercase md:px-3  px-2 py-1 mt-3 border border-gray-300 w-max text-sm md:text-lg font-semibold rounded-full">
                    blokecore
                  </h2>
                  <h1 className="text-2xl md:text-5xl py-2 md:py-5 pt-4 md:pt-8">
                    Blokecore Polo - Sky Blue
                  </h1>
                  <p className="text-gray-600 font-thin">coming soon...</p>
                </div>
                <div className="bottom md:w-1/2">
                  <p className="text-gray-600 font-thin text-sm md:text-lg">
                    Level up your everyday look with our Blokecore Polo in a
                    refreshing Sky Blue shade. Inspired by vintage football
                    culture and modern streetwear vibes, this polo blends clean
                    minimalism with effortless style. Crafted from premium
                    breathable cotton, it offers a perfect regular fit that
                    keeps you cool and comfortable all day.
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={animateImg}
                onMouseMove={moveImage}
                onMouseLeave={removeAnimateImg}
                className="card relative flex flex-col md:w-[85%] gap-4 border-t border-gray-300 py-8 md:flex-row items-center"
              >
                <div className="top md:w-1/2">
                  <div className="w-[100%] aspect-[1/1] rounded-2xl overflow-hidden md:absolute md:w-[20%] md:top-0 z-50 hid-img pointer-events-none md:hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/blokecore-red.webp"
                      alt=""
                    />
                  </div>
                  <h2 className="uppercase md:px-3  px-2 py-1 mt-3 border border-gray-300 w-max text-sm md:text-lg font-semibold rounded-full">
                    blokecore
                  </h2>
                  <h1 className="text-2xl md:text-5xl py-2 md:py-5 pt-4 md:pt-8">
                    Blokecore Polo - Racer Red
                  </h1>
                  <p className="text-gray-600 font-thin">coming soon...</p>
                </div>
                <div className="bottom md:w-1/2">
                  <p className="text-gray-600 font-thin text-sm md:text-lg">
                    Level up your everyday look with our Blokecore Polo in a
                    refreshing Sky Blue shade. Inspired by vintage football
                    culture and modern streetwear vibes, this polo blends clean
                    minimalism with effortless style. Crafted from premium
                    breathable cotton, it offers a perfect regular fit that
                    keeps you cool and comfortable all day.
                  </p>
                </div>
              </div>
              <div
                onMouseEnter={animateImg}
                onMouseMove={moveImage}
                onMouseLeave={removeAnimateImg}
                className="card relative flex flex-col md:w-[85%] gap-4 border-t border-gray-300 py-8 md:flex-row items-center"
              >
                <div className="top md:w-1/2">
                  <div className="w-[100%] aspect-[1/1] rounded-2xl overflow-hidden md:absolute md:w-[20%] md:top-0 z-50 hid-img pointer-events-none md:hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="/images/blokecore-green.webp"
                      alt=""
                    />
                  </div>
                  <h2 className="uppercase md:px-3  px-2 py-1 mt-3 border border-gray-300 w-max text-sm md:text-lg font-semibold rounded-full">
                    blokecore
                  </h2>
                  <h1 className="text-2xl md:text-5xl py-2 md:py-5 pt-4 md:pt-8">
                    Blokecore Polo - Game Green
                  </h1>
                  <p className="text-gray-600 font-thin">coming soon...</p>
                </div>
                <div className="bottom md:w-1/2">
                  <p className="text-gray-600 font-thin text-sm md:text-lg">
                    Level up your everyday look with our Blokecore Polo in a
                    refreshing Sky Blue shade. Inspired by vintage football
                    culture and modern streetwear vibes, this polo blends clean
                    minimalism with effortless style. Crafted from premium
                    breathable cotton, it offers a perfect regular fit that
                    keeps you cool and comfortable all day.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Home;
