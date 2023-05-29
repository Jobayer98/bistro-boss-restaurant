import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Salads = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const salads = data.filter((item) => item.category === "salad");
  return (
    <div className="grid grid-cols-3 gap-6">
      {salads.map((salad, index) => (
        <Card key={index} item={salad} />
      ))}
    </div>
  );
};

export default Salads;
