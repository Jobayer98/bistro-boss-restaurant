import { Link, useNavigate } from "react-router-dom";
import User from "./NavBar/User";
import Links from "./NavBar/Links";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="navbar bg-opacity-60 bg-black text-white md:px-12 fixed z-10 w-full py-2">
      <div className="flex items-center justify-between">
        <Link to="/" className="uppercase text-2xl font-extrabold flex-1">
          Bistro Boss <br />
          <span className="text-base font-semibold tracking-[8.55px]">
            resturant
          </span>
        </Link>
        <Links />
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="bg-orange-700 px-3 py-1 rounded-md font-['Inter']"
            >
              Log out
            </button>
            <User />
          </>
        ) : (
          <Link
            to="/login"
            className="bg-orange-700 px-3 py-1 rounded-md font-['Inter']"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
