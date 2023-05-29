import Banner from "../../../components/Banner/Banner";
import img from "../../../assets/shop/banner2.jpg";

const BannerShop = () => {
  return (
    <Banner className="h-[500px] bg-cover" img={img}>
      <div className="text-white text-center uppercase bg-black bg-opacity-50 w-[80%] mx-auto py-32">
        <h1 className="text-5xl font-bold mb-4">our shop</h1>
        <p>would you like to try a dish?</p>
      </div>
    </Banner>
  );
};

export default BannerShop;
