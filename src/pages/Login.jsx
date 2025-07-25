import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/UsersAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginHandler = async (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/");
  };

  return (
    <div className="w-full px-5 bg-black  min-h-screen md:min-h-screen flex items-center md:justify-center">
      <div className="flex w-full h-full  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
        <h1 className="text-4xl text-[#fff]  md:text-5xl">Login</h1>

        <form
          className="flex items-end flex-col gap-4 md:gap-3"
          onSubmit={handleSubmit(LoginHandler)}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email address</label>
            <input
              className="bg-[#1E1E1E] text-white rounded p-2 outline-0 placeholder-[#CCCCCC]"
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
            <label htmlFor="password">Password</label>
            <input
              className="bg-[#1E1E1E] text-white rounded p-2 outline-0 placeholder-[#CCCCCC]"
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
            Don't have an account?{" "}
            <Link className="text-gray-300" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
