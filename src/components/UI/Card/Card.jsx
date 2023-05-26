import Button from "../Button/Button";

const Card = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="card w-[80%] md:w-[50%] lg:w-[290px] bg-[#f3f3f3] shadow rounded-none font-['Inter'] mx-auto">
      <figure className="">
        <img
          src={image}
          alt={name}
          className="rounded-none h-44 w-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        <p className="text-sm">{recipe}</p>
        <div className="card-actions">
          <Button className="btn uppercase text-[#BB8506] bg-[#e8e8e8] border-[#BB8506] border-2 border-l-0 border-r-0 border-t-0 mt-4">
            Add to Card
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;