const Item = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-6">
      <figure>
        <img
          className="h-16 w-24 lg:h-[100px] lg:w-[150px] rounded-b-full rounded-tr-full"
          src={image}
          alt="menuImg"
          loading="lazy"
        />
      </figure>
      <div className="lg:basis-[320px]">
        <h1 className="font-normal uppercase">{name}</h1>
        <p className="font-['Inter'] text-sm text-gray-500">{recipe}</p>
      </div>
      <span>
        <p className="text-[#d99904] text-lg">${price}</p>
      </span>
    </div>
  );
};

export default Item;
