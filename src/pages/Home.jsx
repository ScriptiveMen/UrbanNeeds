import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const string = stringRef.current;
    const path = pathRef.current;
    const originalPath = `M 0 80 Q 500 80 1000 80`;

    const handleMouseMove = (e) => {
      const rect = string.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 1000;
      const y = ((e.clientY - rect.top) / rect.height) * 160 * 1.5;

      let newPath = `M 0 80 Q ${x} ${y} 1000 80`;
      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: originalPath },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      });
    };

    // Attach event listeners
    string.addEventListener("mousemove", handleMouseMove);
    string.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      string.removeEventListener("mousemove", handleMouseMove);
      string.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-full w-screen realative">
      <section className="h-full w-full">
        <img
          className="h-full w-full object-cover"
          src="/images/newHero.jpg"
          alt=""
        />

        <div className="text absolute top-[2%] md:top-[7%] left-0 px-5 md:px-15 text-white mix-blend-difference  flex flex-col items-start justify-center gap-3 ">
          <h1 className="text-[15vw] leading-none font-bold ">We</h1>
          <h1 className="text-[15vw] leading-none font-bold ">Create</h1>
          <h1 className="text-[15vw] leading-none font-bold ">Timeless</h1>
          <h1 className="text-[15vw] leading-none font-bold ">Essentials</h1>
        </div>
      </section>

      <section className="hero2 pt-20 bg-black text-white  px-8 md:px-17 md:py-30 min-h-screen w-full  rounded-tl-[4rem] rounded-tr-[4rem]">
        <h4 className="text-[#D8FF07] text-lg md:text-xl">What we do</h4>
        <p className="text-2xl md:text-5xl leading-9 md:leading-15 font-thin my-5 md:w-[70%]">
          At Urban Needs®, we create trendy, affordable streetwear tailored for
          the Indian GenZ. From statement-making college fits to chill cafe
          looks, we craft everyday essentials that never compromise on quality.
          We believe fashion should be effortless, accessible, and
          unapologetically YOU — because these aren’t just clothes, these are
          your daily needs.
        </p>
        <div className="px-5 py-3 my-8 md:my-10 bg-white w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg">
          Ready to level up your wardrobe?
          <div className="circle h-4 w-4 rounded-full bg-[#D8FF07]"></div>
        </div>

        <div
          ref={stringRef}
          className="string md:w-[80%] h-[15vh] md:h-[27vh] flex items-center justify-start"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d="M 0 80 Q 500 80 1000 80"
              stroke="white"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>

      <section className="sec3 bg-black text-white  min-h-screen w-full">
        <div className="px-8 md:px-17 pb-10 md:pb-20">
          <div className="txt uppercase w-full flex flex-col items-center justify-center">
            <h1 className="text-[10vw] leading-6 tracking-tighter">Featured</h1>
            <h1 className="text-[10vw] tracking-tighter">Drops</h1>
          </div>

          <div className="cards flex flex-col gap-10 md:gap-30">
            <div className="cards font-machina flex  flex-wrap md:flex-nowrap items-start justify-center gap-10 md:gap-20 w-full">
              <div className="w-full md:w-[40%] flex flex-col rounded-4xl ">
                <div className="aspect-[4/5] rounded-4xl overflow-hidden w-full">
                  <img
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
                <div className="aspect-[4/5] rounded-4xl overflow-hidden w-full">
                  <img
                    className="h-full w-full rounded-4xl object-cover"
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
                fashion that speaks for itself. From bold streetwear to timeless
                essentials, we craft clothing that helps you express your style
                effortlessly. Our mission is simple — empower the next-gen to
                break norms, lead trends, and make their mark through fashion.
              </p>

              <div className="px-5 py-3 my-8 md:my-10 bg-white w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg">
                View more products
                <div className="circle h-4 w-4 rounded-full bg-[#D8FF07]"></div>
              </div>
            </div>
            <div
              ref={stringRef}
              className="string md:w-[100%] h-[15vh] md:h-[27vh] flex items-center justify-start"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 1000 160"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  ref={pathRef}
                  d="M 0 80 Q 500 80 1000 80"
                  stroke="white"
                  fill="transparent"
                  strokeWidth="2"
                />
              </svg>
            </div>
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
            <div className="line w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400">
              <h1 className="text-[6vw] md:text-[4vw] font-thin">
                Linen pants
              </h1>
            </div>
            <div className="line w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400">
              <h1 className="text-[6vw] md:text-[4vw] font-thin">
                raglan t-shirt
              </h1>
            </div>
            <div className="line w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400">
              <h1 className="text-[6vw] md:text-[4vw] font-thin">
                half sleeved raglan tee
              </h1>
            </div>
            <div className="line w-[95%] md:w-[89%] uppercase py-5 md:py-9 pl-2 flex items-center justify-start  border-t-1 border-gray-400">
              <h1 className="text-[6vw] md:text-[4vw] font-thin">
                block haters w/ shades
              </h1>
            </div>
          </div>

          <div className="px-5 py-3  m-auto bg-[#D8FF07] w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg">
            Shop The Trend
            <div className="circle h-3 w-3 rounded-full bg-black"></div>
          </div>
        </section>

        <section className="sec5 pt-20 min-h-screen bg-white md:pt-60">
          <div className="txt uppercase pb-10  text-black flex flex-col items-center justify-center">
            <h1 className="text-[10vw] md:text-[8vw] leading-6 tracking-tighter">
              Latest Drops
            </h1>
          </div>

          <div className="w-full text-black px-10  py-4 flex flex-col items-center justify-center gap-7">
            <div className="card flex flex-col gap-4 border-t border-gray-300 py-8">
              <div className="top ">
                <div className="w-[100%] aspect-[1/1] rounded-2xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/blokecore-brown.webp"
                    alt=""
                  />
                </div>
                <h2 className="uppercase px-2 py-1 mt-3 border border-gray-300 w-max text-sm md:text-lg font-semibold rounded-full">
                  blokecore
                </h2>
                <h1 className="text-2xl py-2 pt-4">
                  Blokecore Polo - Sky Blue
                </h1>
                <p className="text-gray-600 font-thin">coming soon...</p>
              </div>
              <div className="bottom">
                <p className="text-gray-600 font-thin text-sm">
                  Level up your everyday look with our Blokecore Polo in a
                  refreshing Sky Blue shade. Inspired by vintage football
                  culture and modern streetwear vibes, this polo blends clean
                  minimalism with effortless style. Crafted from premium
                  breathable cotton, it offers a perfect regular fit that keeps
                  you cool and comfortable all day.
                </p>
              </div>
            </div>
            <div className="card flex flex-col gap-4 border-t border-gray-300 py-8">
              <div className="top ">
                <div className="w-[100%] aspect-[1/1] rounded-2xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/blokecore-brown.webp"
                    alt=""
                  />
                </div>
                <h2 className="uppercase px-2 py-1 mt-3 border border-gray-300 w-max text-sm md:text-lg font-semibold rounded-full">
                  blokecore
                </h2>
                <h1 className="text-2xl py-2 pt-4">
                  Blokecore Polo - Sky Blue
                </h1>
                <p className="text-gray-600 font-thin">coming soon...</p>
              </div>
              <div className="bottom">
                <p className="text-gray-600 font-thin text-sm">
                  Level up your everyday look with our Blokecore Polo in a
                  refreshing Sky Blue shade. Inspired by vintage football
                  culture and modern streetwear vibes, this polo blends clean
                  minimalism with effortless style. Crafted from premium
                  breathable cotton, it offers a perfect regular fit that keeps
                  you cool and comfortable all day.
                </p>
              </div>
            </div>
            <div className="card flex flex-col gap-4 border-t border-gray-300 py-8">
              <div className="top ">
                <div className="w-[100%] aspect-[1/1] rounded-2xl overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/blokecore-brown.webp"
                    alt=""
                  />
                </div>
                <h2 className="uppercase px-2 py-1 mt-3 border border-gray-300 w-max text-sm md:text-lg font-semibold rounded-full">
                  blokecore
                </h2>
                <h1 className="text-2xl py-2 pt-4">
                  Blokecore Polo - Sky Blue
                </h1>
                <p className="text-gray-600 font-thin">coming soon...</p>
              </div>
              <div className="bottom">
                <p className="text-gray-600 font-thin text-sm">
                  Level up your everyday look with our Blokecore Polo in a
                  refreshing Sky Blue shade. Inspired by vintage football
                  culture and modern streetwear vibes, this polo blends clean
                  minimalism with effortless style. Crafted from premium
                  breathable cotton, it offers a perfect regular fit that keeps
                  you cool and comfortable all day.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
