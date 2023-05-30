import Button from "../Button/Button";

const Card = ({ item }) => {
  const { name, recipe, image } = item;
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
      <div className="flex flex-col items-center text-center px-2">
        <h2 className="card-title text-lg font-semibold mt-3">{name}</h2>
        <p className="text-xs mt-2 flex-1">{recipe}</p>
        <div className="card-actions">
          <Button className="font-['Inter'] text-[#BB8506] uppercase font-medium border-b-[3px] px-4 pb-2 pt-3 border-[#BB8506] rounded-full hover:text-white hover:bg-[#BB8506] transition duration-500 ease-in-out my-4">
            Add to Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
