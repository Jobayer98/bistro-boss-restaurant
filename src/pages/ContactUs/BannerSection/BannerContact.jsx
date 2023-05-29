import img from "../../../assets/contact/banner.jpg";
import Banner from "../../../components/Banner/Banner";

const BannerContact = () => {
  return (
    <Banner className="h-[500px] bg-cover" img={img}>
      <div className="text-white text-center uppercase bg-black bg-opacity-50 w-[80%] mx-auto py-16">
        <h1 className="text-5xl font-bold mb-4">contact us</h1>
        <p>would you like to try a dish?</p>
      </div>
    </Banner>
  );
};

export default BannerContact;
