import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";

const Soups = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const soups = data.filter((item) => item.category === "soup");
  return (
    <div className="grid grid-cols-3 gap-6">
      {soups.map((soup, index) => (
        <Card key={index} item={soup} />
      ))}
    </div>
  );
};

export default Soups;
