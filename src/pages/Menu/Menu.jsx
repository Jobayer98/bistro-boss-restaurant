import MenuBanner from "./BannerSection/MenuBanner";
import Dessert from "./DessertSection/Dessert";
import Offer from "./OfferSection.jsx/Offer";

const Menu = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <MenuBanner />
      <Offer />
      <Dessert />
    </div>
  );
};

export default Menu;
