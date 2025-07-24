import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import { nanoid } from "nanoid";
// import { useDispatch } from "react-redux";
// import { asyncRegisterUser } from "../store/actions/UsersAction";
// import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    user.wishlist = [];
    dispatch(asyncRegisterUser(user));
    toast.success("Login Now!");
    navigate("/login");
  };

  return (
    <div className="w-full px-5 bg-black min-h-screen md:min-h-screen flex items-center md:justify-center">
      <div className="flex w-full h-full  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
        <h1 className="text-4xl text-[#fff]  md:text-5xl">Register</h1>

        <form
          className="flex items-end flex-col gap-4 md:gap-3"
          onSubmit={handleSubmit(RegisterHandler)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name">Fullname</label>
            <input
              className="bg-[#1E1E1E] placeholder-[#CCCCCC] text-white rounded p-2 outline-0"
              {...register("name", {
                required: "Full Name is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
              type="text"
              placeholder="Enter your full name"
              id="name"
              name="name"
            />
            {errors?.name && (
              <small className="text-red-400">{errors.name.message}</small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="phonenumber">Contact Number </label>
            <input
              className="bg-[#1E1E1E] placeholder-[#CCCCCC] text-white rounded p-2 outline-0"
              {...register("phonenumber", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be exactly 10 digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
              type="tel"
              placeholder="Enter your contact number"
              id="phonenumber"
              name="phonenumber"
            />
            {errors?.phonenumber && (
              <small className="text-red-400">
                {errors.phonenumber.message}
              </small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="username">Create Username</label>
            <input
              className="bg-[#1E1E1E] placeholder-[#CCCCCC] text-white rounded p-2 outline-0"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Username can only contain letters, numbers, and underscores",
                },
              })}
              type="text"
              placeholder="Enter your username"
              id="username"
              name="username"
            />
            {errors?.username && (
              <small className="text-red-400">{errors.username.message}</small>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email">Email address</label>
            <input
              className="bg-[#1E1E1E] placeholder-[#CCCCCC] text-white rounded p-2 outline-0"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              type="text"
              placeholder="Enter your email address"
              id="email"
              name="email"
            />
            {errors?.email && (
              <small className="text-red-400">{errors.email.message}</small>
            )}
          </div>
          <div className="flex flex-col w-full ">
            <label htmlFor="password">Create Password</label>
            <input
              className="bg-[#1E1E1E] placeholder-[#CCCCCC] text-white rounded p-2 outline-0"
              placeholder="Enter your password here"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              id="password"
            />
            {errors?.password && (
              <small className="text-red-400">{errors.password.message}</small>
            )}
          </div>

          <button
            className="button px-5 py-2 my-8 md:my-10 bg-[#D8FF07] w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg border-2 border-black origin-center"
            type="submit"
          >
            Continue
          </button>
        </form>

        <div>
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link className="text-gray-300" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
