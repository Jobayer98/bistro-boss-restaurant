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
          <Button className="font-['Inter'] uppercase font-medium border-b-[3px] px-4 pb-2 pt-3 border-gray-400 mt-6 text-center rounded-full hover:text-white hover:bg-[#1E1E1E] transition duration-500 ease-in-out">
            view full menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
