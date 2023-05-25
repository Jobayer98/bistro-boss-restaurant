import Banner from "./Banner/Banner";
import BistroInfo from "./Sections/BistroInfo/BistroInfo";
import PopularMenu from "./Sections/Menu/PppularMenu";
import Order from "./Sections/Order/Order";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Order />
      <BistroInfo />
      <PopularMenu />
    </>
  );
};

export default HomePage;
