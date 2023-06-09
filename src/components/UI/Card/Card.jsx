import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const Card = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    const itemDetails = {
      menuId: _id,
      name,
      price,
      recipe,
      image,
      email: user?.email,
    };
    const addToCart = async () => {
      if (user && user?.email) {
        await axios.post("http://localhost:3000/add-to-cart", itemDetails);
        refetch();
      } else {
        navigate("/login");
      }
    };

    addToCart();
  };

  return (
    <div className="card bg-[#f3f3f3] shadow rounded-none font-['Inter'] mx-auto">
      <figure className="">
        <img
          src={image}
          alt={name}
          className="rounded-none h-36 w-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body items-center text-center px-2">
        <h2 className="card-title text-lg font-semibold mt-3">{name}</h2>
        <p className="">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => {
              handleClick();
            }}
            className="btn btn-outline font-['Inter'] text-[#BB8506] uppercase font-medium border-b-[3px] px-4 pb-2 pt-3 border-[#BB8506] rounded-md hover:text-[#BB8506] hover:btn my-4"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
