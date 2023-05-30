import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name);
        if (result.user.email) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have successfully registered",
            showConfirmButton: false,
            timer: 1000,
          });

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // clear form
    reset();
  };
  return (
    <div className="font-['Inter'] w-full lg:w-1/2">
      <h1 className="text-center mb-3 text-2xl font-semibold">Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[80%] lg:w-[70%] mx-auto"
      >
        <label htmlFor="name" className="font-medium">
          Name <br />
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
            {...register("name", { required: true })}
          />
        </label>
        <label htmlFor="email" className="font-medium">
          Email <br />
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
            {...register("email", { required: true })}
          />
        </label>

        <label htmlFor="password" className="font-medium">
          Password <br />
          <input
            type="password"
            required
            placeholder="Enter your password"
            className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
            {...register("password", { required: true })}
          />
        </label>

        <button
          type="submit"
          className="flex justify-center items-center gap-2 bg-[#D1A054] px-4 py-2 rounded-md text-white text-lg font-medium"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-[#D1A054]">
          Already registered?
          <Link to="/login" className="font-medium">
            {" "}
            Go to log in
          </Link>
          <span className="my-2 block text-[#444444]">Or sign in with</span>
        </p>
        <div className="flex justify-center gap-10 mt-3">
          <button className="btn border-[1.5px] border-black rounded-full p-2">
            <FaFacebookF className="text-xl" />
          </button>
          <button className="btn border-[1.5px] border-black rounded-full p-2">
            <FaGoogle className="text-xl" />
          </button>
          <button className="btn border-[1.5px] border-black rounded-full p-2">
            <FaGithub className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
