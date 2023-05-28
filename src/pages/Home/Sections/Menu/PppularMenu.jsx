import { Link } from "react-router-dom";
import Item from "../../../../components/Item/Item";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useFetch from "../../../../hooks/useFetch";
import Button from "../../../../components/UI/Button/Button";

const PopularMenu = () => {
  const { data } = useFetch("../../../../../public/menu.json");
  const popularItems = data.filter((item) => item.category === "popular");
  return (
    <section className="mt-24">
      <SectionTitle heading="from our menu" subHeading="Check it out" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
        {popularItems.map((item, index) => (
          <Item key={index} item={item} />
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
