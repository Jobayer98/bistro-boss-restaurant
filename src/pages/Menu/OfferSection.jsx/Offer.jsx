import Item from "../../../components/Item/Item";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/UI/Button/Button";
import useFetch from "../../../hooks/useFetch";

const Offer = () => {
  const { data } = useFetch("../../../../public/menu.json");
  data.length = 4;

  return (
    <section className="mt-24 flex flex-col items-center">
      <SectionTitle heading={"today's offer"} subHeading={"Don't miss"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
      <Button
        className={
          "text-xl font-['Inter'] uppercase font-medium border-b-[3px] px-4 pb-2 pt-3 border-black mt-12 text-center rounded-full hover:text-white hover:bg-[#1E1E1E] transition duration-500 ease-in-out"
        }
      >
        order your favourite food
      </Button>
    </section>
  );
};

export default Offer;
