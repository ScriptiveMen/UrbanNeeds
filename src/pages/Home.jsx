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

        <div className="text absolute top-[10%] md:top-[16%] left-0 px-5 md:px-15 text-white mix-blend-difference  flex flex-col items-start justify-center gap-3 ">
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

      <section className="sec3 bg-black text-white px-8 md:px-17  min-h-screen w-full">
        <div className="txt uppercase w-full flex flex-col items-center justify-center">
          <h1 className="text-[10vw] leading-6">Featured</h1>
          <h1 className="text-[10vw]">Drops</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
