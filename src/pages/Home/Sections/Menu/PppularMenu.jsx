import { Link } from "react-router-dom";
import MenuItem from "../../../../components/PopularMenu/MenuItem";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../../../components/UI/Button/Button";

const PopularMenu = () => {
  const { data } = useFetch();
  const popularItems = data.filter((item) => item.category === "popular");
  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <SectionTitle heading="from our menu" subHeading="Check it out" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/menu">
          <Button className="btn btn-outline uppercase border-2 border-l-0 border-r-0 border-t-0">
            view full menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
