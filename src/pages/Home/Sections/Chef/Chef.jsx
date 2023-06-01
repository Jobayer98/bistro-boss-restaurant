import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Card from "../../../../components/UI/Card/Card";
import useFetch from "../../../../hooks/useFetch";
const Chef = () => {
  const { data: offeredItems = [] } = useFetch("http://localhost:3000/offered");

  return (
    <section className="mt-24">
      <SectionTitle heading="chef recommends" subHeading={"Should Try"} />
      <div className="grid grid-cols-3 gap-12">
        {offeredItems.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Chef;
