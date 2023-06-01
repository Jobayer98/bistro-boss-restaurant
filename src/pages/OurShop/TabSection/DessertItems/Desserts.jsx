import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Desserts = () => {
  const { data: desserts = [] } = useFetch("http://localhost:3000/soups");
  return (
    <div className="grid grid-cols-3 gap-6">
      {desserts.map((dessert) => (
        <Card key={dessert._id} item={dessert} />
      ))}
    </div>
  );
};

export default Desserts;
