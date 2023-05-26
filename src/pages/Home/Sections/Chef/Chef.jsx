import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";
const Chef = () => {
  const { data } = useFetch();
  const offeredItems = data.filter((item) => item.category === "offered");
  offeredItems.length = 3;

  return (
    <section className="max-w-4xl mx-auto my-16">
      <SectionTitle heading="chef recommends" subHeading={"Should Try"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
        {offeredItems.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Chef;
