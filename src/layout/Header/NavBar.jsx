import { Link, useNavigate } from "react-router-dom";
import Cart from "./NavBar/Cart";
import User from "./NavBar/User";
import Links from "./NavBar/Links";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="navbar bg-opacity-60 bg-black text-white md:px-12 fixed z-10">
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
        <button
          onClick={handleLogOut}
          className="btn btn-primary font-bold text-sm uppercase mx-4"
        >
          Sign out
        </button>
        <User />
      </div>
    </div>
  );
};

export default NavBar;
