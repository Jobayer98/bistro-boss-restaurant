import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Pizza = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const pizza = data.filter((item) => item.category === "pizza");
  return (
    <div className="grid grid-cols-3 gap-6">
      {pizza.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Pizza;
