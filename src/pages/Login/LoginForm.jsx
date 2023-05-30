import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const LoginForm = () => {
  const { login, loginWithgoogle } = useContext(AuthContext);
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (validateCaptcha(data.cpatcha) == true) {
      login(data.email, data.password)
        .then((result) => {
          if (result.user.email) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You have successfully registered",
              showConfirmButton: false,
              timer: 1000,
            });
            reset();
            navigate("/");
          }
        })
        .catch(() => {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Failed to login",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Failed to login",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleGoogleLogin = () => {
    loginWithgoogle()
      .then((result) => {
        if (result.user.email) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "You have successfully Login",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/");
        }
      })
      .catch(() => {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Failed to login",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="font-['Inter'] w-full lg:w-1/2">
      <h1 className="text-center mb-2 text-2xl font-semibold">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[80%] lg:w-[70%] mx-auto"
      >
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
            placeholder="Enter your password"
            className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
            {...register("password", { required: true })}
          />
        </label>
        <label>
          <LoadCanvasTemplate />
        </label>
        <label htmlFor="captcha">
          <input
            type="text"
            placeholder="Type here"
            className="p-3 w-full rounded-md text-sm font-thin outline-gray-200"
            {...register("cpatcha", { required: true })}
          />
        </label>
        <button
          type="submit"
          className="flex justify-center items-center gap-2 bg-[#dbb984] px-4 py-2 rounded-md text-white text-lg font-medium"
        >
          Sign In
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-[#cea86c]">
          New here?
          <Link to="/signup" className="font-medium text-[#D1A054]">
            {" "}
            Create a New Account
          </Link>
          <span className="my-2 block text-[#444444]">Or sign in with</span>
        </p>
        <div className="flex justify-center gap-10 mt-3">
          <button className="btn border-[1.5px] border-black rounded-full p-2">
            <FaFacebookF className="text-xl" />
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn border-[1.5px] border-black rounded-full p-2"
          >
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

export default LoginForm;
