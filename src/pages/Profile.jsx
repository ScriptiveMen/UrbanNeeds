import React, { useEffect } from "react";
import String from "../components/String";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncDeleteUser, asyncUpdateUser } from "../store/actions/UsersAction";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      reset({
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        phonenumber: user.phonenumber,
      });
    }
  }, [user, reset, navigate]);

  const UpdateUserHandler = (newuser) => {
    dispatch(asyncUpdateUser(user.id, newuser));
    toast.success("Profile Updated");
  };

  const DeleteUserHandler = () => {
    dispatch(asyncDeleteUser(user.id));
    toast.success("Profile Deleted");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen w-full bg-white overflow-hidden  pt-20 md:pt-30">
      <div className="flex flex-col items-start justify-center  pb-20 md:pb-30">
        <div className="left relative  w-full px-5 md:px-15  flex flex-col items-start gap-4">
          <p className="text-black font-thin text-sm md:text-xl">
            Welcome back
          </p>
          <div className="main-head pb-20 md:pb-40">
            <h1 className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-black">
              {user?.name}
            </h1>
          </div>
          <div className="absolute bottom-0 w-[90%] md:w-full">
            <String color={"black"} />
          </div>
        </div>

        <div className="profile w-full px-5 md:px-15 flex flex-col gap-3 md:gap-10">
          <h1 className="capitalize text-2xl font-machina text-black md:text-4xl font-bold pb-2 md:pb-5">
            Personal Information
          </h1>
          <div className="bottom flex w-full h-full m-auto  flex-col  gap-5 justify-between md:w-[40%] md:gap-9">
            <form
              className="flex items-end flex-col gap-4 md:gap-7"
              onSubmit={handleSubmit(UpdateUserHandler)}
            >
              <div className="flex flex-col w-full">
                <label htmlFor="name">Fullname</label>
                <input
                  className="bg-[#ebe8e1] p-2 outline-0"
                  {...register("name", {
                    required: "Full Name is required",
                    minLength: { value: 3, message: "At least 3 characters" },
                  })}
                  type="text"
                  placeholder="Enter your fullname"
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
                  className="bg-[#ebe8e1] p-2 outline-0"
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
                  className="bg-[#ebe8e1] p-2 outline-0"
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
                  <small className="text-red-400">
                    {errors.username.message}
                  </small>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="email">Email address</label>
                <input
                  className="bg-[#ebe8e1] p-2 outline-0"
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
                <label htmlFor="password">Create New Password</label>
                <input
                  className="bg-[#ebe8e1] p-2 outline-0"
                  placeholder="Enter your password here"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type="text"
                  id="password"
                />
                {errors?.password && (
                  <small className="text-red-400">
                    {errors.password.message}
                  </small>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
                <button
                  className="button hover:scale-95 cursor-pointer transition-all duration-100 px-5 py-3 md:my-10 bg-[#D8FF07] w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg border-2 border-black origin-center"
                  type="submit"
                >
                  Update Account
                  <div className="circle bg-black h-4 w-4 rounded-full"></div>
                </button>

                <div
                  onClick={DeleteUserHandler}
                  className="button hover:scale-95 cursor-pointer transition-all duration-100 px-5 py-3 md:my-10 bg-white w-max text-black rounded-full flex items-center justify-center gap-3 md:text-lg border-2 border-black origin-center"
                >
                  Delete Profile
                  <div className="circle bg-[#D8FF07] h-4 w-4 rounded-full"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
