import { Link, useNavigate } from "react-router-dom";
import Links from "./NavBar/Links";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartContext from "../../context/CartContext/CartContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const { items } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="navbar bg-opacity-60 bg-black text-white md:px-12 fixed z-10 w-full py-2 max-w-screen-xl">
      <div className="flex-1">
        <Link to="/" className="uppercase text-2xl font-extrabold flex-1">
          Bistro Boss <br />{" "}
          <span className="text-base font-semibold tracking-[8.55px]">
            resturant{" "}
          </span>{" "}
        </Link>
      </div>
      <div className="flex-none">
        <Links />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link to="/cart">
                <HiOutlineShoppingCart className="text-2xl" />
              </Link>
              <span className="indicator-item badge badge-secondary">
                {items.length}
              </span>
            </div>
          </label>
        </div>
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className=" mx-4 rounded-md text-sm font-bold font-['Inter'] uppercase"
            >
              Log out
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/015/409/989/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="mx-4 rounded-md text-sm font-bold font-['Inter'] uppercase"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
