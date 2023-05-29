import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Desserts = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const desserts = data.filter((item) => item.category === "dessert");
  return (
    <div className="grid grid-cols-3 gap-6">
      {desserts.map((dessert, index) => (
        <Card key={index} item={dessert} />
      ))}
    </div>
  );
};

export default Desserts;
