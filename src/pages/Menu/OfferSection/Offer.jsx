import Item from "../../../components/Item/Item";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/UI/Button/Button";
import useFetch from "../../../hooks/useFetch";

const Offer = () => {
  const { data } = useFetch("../../../../public/menu.json");
  const offered = data.filter((item) => item.category === "offered");

  return (
    <section className="mt-16 flex flex-col items-center">
      <SectionTitle heading={"today's offer"} subHeading={"Don't miss"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center max-w-screen-md mx-auto">
        {offered.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
      <Button
        className={
          "font-['Inter'] uppercase font-medium border-b-[3px] px-4 pb-2 pt-3 border-black mt-6 text-center rounded-full hover:text-white hover:bg-[#1E1E1E] transition duration-500 ease-in-out"
        }
      >
        order your favourite food
      </Button>
    </section>
  );
};

export default Offer;
