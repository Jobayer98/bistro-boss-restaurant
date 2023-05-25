import Banner from "./Banner/Banner";
import BistroInfo from "./Sections/BistroInfo/BistroInfo";
import Contact from "./Sections/Contact/Contact";
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
    </>
  );
};

export default HomePage;
