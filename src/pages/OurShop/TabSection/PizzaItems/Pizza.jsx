import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Pizza = () => {
  const { data: pizza = [] } = useFetch("http://localhost:3000/pizza");
  return (
    <div className="grid grid-cols-3 gap-6">
      {pizza.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Pizza;
