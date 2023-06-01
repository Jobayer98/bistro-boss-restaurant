import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Drinks = () => {
  const { data: drinks = [] } = useFetch("http://localhost:3000/drinks");
  return (
    <div className="grid grid-cols-3 gap-6">
      {drinks.map((drink) => (
        <Card key={drink._id} item={drink} />
      ))}
    </div>
  );
};

export default Drinks;
