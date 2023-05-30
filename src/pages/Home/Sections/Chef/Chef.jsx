import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";
const Chef = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const offeredItems = data.filter((item) => item.category === "offered");
  offeredItems.length = 3;

  return (
    <section className="mt-24">
      <SectionTitle heading="chef recommends" subHeading={"Should Try"} />
      <div className="grid grid-cols-3 gap-12">
        {offeredItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Chef;
