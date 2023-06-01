import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const OAuth = () => {
  const { loginWithgoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
          navigate(from, { replace: true });
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
  return (
    <div className="text-center mt-4">
      <div className="flex justify-center gap-10 mt-3">
        <button className="btn btn-circle btn-outline">
          <FaFacebookF className="text-xl" />
        </button>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle className="text-xl" />
        </button>
        <button className="btn btn-circle btn-outline">
          <FaGithub className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default OAuth;
