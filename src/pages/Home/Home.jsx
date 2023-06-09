import Banner from "./Banner/Banner";
import BistroInfo from "./Sections/BistroInfo/BistroInfo";
import Chef from "./Sections/Chef/Chef";
import Contact from "./Sections/Contact/Contact";
import MenuInfo from "./Sections/Menu/MenuInfo";
import PopularMenu from "./Sections/Menu/PppularMenu";
import Order from "./Sections/Order/Order";
import Testimonial from "./Sections/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="max-w-screen-lg mx-auto">
        <Order />
        <BistroInfo />
        <PopularMenu />
        <Contact />
        <Chef />
        <MenuInfo />
        <Testimonial />
      </div>
    </>
  );
};

export default HomePage;
