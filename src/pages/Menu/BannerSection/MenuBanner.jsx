import Banner from "../../../components/Banner/Banner";
import MenuBannerImg from "../../../assets/menu/banner3.jpg";

const MenuBanner = () => {
  return (
    <Banner className="h-[700px]" img={MenuBannerImg}>
      <div className="text-white text-center uppercase bg-black bg-opacity-50 bg-cover w-[80%] mx-auto py-32">
        <h1 className="text-5xl font-bold mb-4">our menu</h1>
        <p>would you like to try a dish?</p>
      </div>
    </Banner>
  );
};

export default MenuBanner;
