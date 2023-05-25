import MenuItem from "../../../../components/PopularMenu/MenuItem";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useFetch from "../../../../hooks/useFetch";

const PopularMenu = () => {
  const { data } = useFetch();
  const popularItems = data.filter((item) => item.category === "popular");
  return (
    <section className="mb-16">
      <SectionTitle heading="from our menu" subHeading="Check it out" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
