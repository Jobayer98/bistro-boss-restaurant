import { Link } from "react-router-dom";
import Cart from "./NavBar/Cart";
import User from "./NavBar/User";
import Links from "./NavBar/Links";

const NavBar = () => {
  return (
    <div className="navbar bg-opacity-60 bg-black text-white md:px-12 fixed z-10 max-w-screen-xl">
      <div className="flex-1">
        <Link to="/" className="uppercase text-2xl font-extrabold">
          Bistro Boss <br />
          <span className="text-base font-semibold tracking-[8.55px]">
            resturant
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <Links />
        <Cart />
        <Link to="singout" className="font-bold text-sm uppercase mx-4">
          Sign out
        </Link>
        <User />
      </div>
    </div>
  );
};

export default NavBar;
