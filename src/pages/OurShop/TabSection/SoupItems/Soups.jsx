import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Soups = () => {
  const { data: soups = [] } = useFetch("http://localhost:3000/soups");
  return (
    <div className="grid grid-cols-3 gap-6">
      {soups.map((soup) => (
        <Card key={soup._id} item={soup} />
      ))}
    </div>
  );
};

export default Soups;
