import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Salads = () => {
  const { data: salads = [] } = useFetch("http://localhost:3000/salads");
  return (
    <div className="grid grid-cols-3 gap-6">
      {salads.map((salad) => (
        <Card key={salad._id} item={salad} />
      ))}
    </div>
  );
};

export default Salads;
