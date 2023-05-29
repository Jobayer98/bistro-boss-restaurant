const PageRight = () => {
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
    </div>
  );
};

export default PageRight;
