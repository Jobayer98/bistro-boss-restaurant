import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="font-['Inter'] w-1/2">
      <h1 className="text-center my-4 text-2xl font-semibold">Login</h1>
      <form className="flex flex-col gap-4 w-[70%] mx-auto">
        <label htmlFor="email" className="font-medium">
          Email <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
          />
        </label>

        <label htmlFor="password" className="font-medium">
          Password <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-2 p-3 w-full rounded-md text-sm font-thin outline-gray-200"
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="U A g f u o"
            readOnly
            className="p-3 w-full rounded-md text-sm font-thin outline-gray-200"
          />
          <span className="text-blue-600 text-sm">Reload Captcha</span>
        </label>
        <label htmlFor="captcha">
          <input
            type="text"
            placeholder="Type here"
            className="p-3 w-full rounded-md text-sm font-thin outline-gray-200"
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

export default LoginForm;
