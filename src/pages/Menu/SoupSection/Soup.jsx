import soupImg from "../../../assets/menu/soup-bg.jpg";
import Banner from "../../../components/Banner/Banner";
import Item from "../../../components/Item/Item";
import Button from "../../../components/UI/Button/Button";
import useFetch from "../../../hooks/useFetch";

const Soup = () => {
  const { data } = useFetch("../../../../public/menu.json");
  const soups = data.filter((item) => item.category === "soup");
  soups.length = 6;
  return (
    <section className="mt-16">
      <Banner className="h-[400px] bg-cover" img={soupImg}>
        <div className="text-white bg-black bg-opacity-60 w-[70%] mx-auto p-16 ">
          <h1 className="text-3xl font-semibold mb-3 uppercase">Soups</h1>
          <p className="font-['Inter'] text-sm">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </Banner>
      <div className="flex flex-col items-center mt-16 max-w-screen-md mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
          {soups.map((item, index) => (
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
      </div>
    </section>
  );
};

export default Soup;
