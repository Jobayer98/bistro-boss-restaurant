import Banner from "./Banner/Banner";
import BistroInfo from "./Sections/BistroInfo/BistroInfo";
import Chef from "./Sections/Chef/Chef";
import Contact from "./Sections/Contact/Contact";
import MenuInfo from "./Sections/Menu/MenuInfo";
import PopularMenu from "./Sections/Menu/PppularMenu";
import Order from "./Sections/Order/Order";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Order />
      <BistroInfo />
      <PopularMenu />
      <Contact />
      <Chef />
      <MenuInfo />
    </>
  );
};

export default HomePage;
