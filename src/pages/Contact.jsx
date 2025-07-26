import gsap from "gsap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const animateInput = (e) => {
    const input = e.target;
    gsap.to(input, {
      duration: 0.3,
      borderBottomColor: "#000",
      ease: "power1.out",
    });
  };

  const animateInputLeave = (e) => {
    const input = e.target;
    gsap.to(input, {
      duration: 0.3,
      borderBottomColor: "#D1D5DB",
      ease: "power1.out",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const LoginHandler = async (user) => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-white pt-20 md:pt-30 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 pb-7">
        <div className="left md:w-[50%] w-full relative px-5 md:px-15  flex flex-col items-start gap-4">
          <p className="text-gray-500 font-thin text-sm md:text-xl">
            We’d love to hear from you
          </p>
          <div className="main-head pb-2 md:pb-10">
            <h1 className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-gray-900">
              Get in Touch
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(LoginHandler)}
            className="w-full flex items-start  flex-col gap-5 md:gap-10"
          >
            <input
              onMouseEnter={animateInput}
              onMouseLeave={animateInputLeave}
              className="placeholder-black border-b w-full outline-none py-3 border-gray-300 text-sm md:text-xl"
              type="text"
              placeholder="Name"
            />
            <div className="w-full">
              <input
                onMouseEnter={animateInput}
                onMouseLeave={animateInputLeave}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
                className="placeholder-black border-b w-full outline-none py-3 border-gray-300 text-sm md:text-xl"
                type="text"
                placeholder="Email"
              />
              {errors?.email && (
                <small className="text-red-400">{errors.email.message}</small>
              )}
            </div>
            <input
              onMouseEnter={animateInput}
              onMouseLeave={animateInputLeave}
              className="placeholder-black border-b w-full outline-none py-3 border-gray-300 text-sm md:text-xl"
              type="text"
              placeholder="Phone Number (Optional)"
            />
            <div className="w-full">
              <input
                onMouseEnter={animateInput}
                onMouseLeave={animateInputLeave}
                {...register("password", {
                  required: "Message is required",
                  minLength: {
                    value: 6,
                    message: "Message must be at least 6 characters",
                  },
                })}
                className="placeholder-black border-b w-full outline-none py-3 border-gray-300 text-sm md:text-xl"
                type="textarea"
                placeholder="Message"
              />
              {errors?.password && (
                <small className="text-red-400">
                  {errors.password.message}
                </small>
              )}
            </div>

            <input
              onMouseEnter={animateInput}
              onMouseLeave={animateInputLeave}
              className="uppercase pt-4 w-max text-xl md:text-3xl font-black hover:border-b-3 border-gray-300 cursor-pointer "
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
        <div className="right md:w-[40%] px-5 md:px-15 flex flex-col md:flex-col-reverse gap-10 md:gap-20">
          <div className="top  w-full aspect-video rounded-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src="/images/contact2.mp4"
            ></video>
          </div>
          <div className="bottom flex flex-col gap-5  md:gap-10 md:flex-col-reverse">
            <div className="flex flex-col gap-2 md:gap-5">
              <h2 className="font-bold md:text-2xl">CALL US</h2>
              <p className="text-lg w-max font-thin border-b border-black md:text-2xl">
                +91-7814877642
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-5">
              <h2 className="font-bold md:text-2xl">DROP US A LINE</h2>
              <p className="text-lg w-max font-thin border-b border-black md:text-2xl">
                customer@urbanneeds.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
