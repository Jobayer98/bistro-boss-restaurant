import axios from "axios";
import Swal from "sweetalert2";

const Card = ({ item }) => {
  const { name, recipe, image } = item;

  const handleClick = (item) => {
    const addToCart = async () => {
      const res = await axios.post("http://localhost:3000/add-to-cart", {
        item,
      });

      if (res.status === 201) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          position: "top",
          icon: "error",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
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
              handleClick(item);
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
