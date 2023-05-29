import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Drinks = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const drinks = data.filter((item) => item.category === "drinks");
  return (
    <div className="grid grid-cols-3 gap-6">
      {drinks.map((drink, index) => (
        <Card key={index} item={drink} />
      ))}
    </div>
  );
};

export default Drinks;
