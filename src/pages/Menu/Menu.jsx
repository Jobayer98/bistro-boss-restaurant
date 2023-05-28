import MenuBanner from "./BannerSection/MenuBanner";
import Dessert from "./DessertSection/Dessert";
import Offer from "./OfferSection/Offer";
import Pizza from "./PizzaSection/Pizza";
import Salad from "./SaladSection/Salad";
import Soup from "./SoupSection/Soup";

const Menu = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <MenuBanner />
      <Offer />
      <Dessert />
      <Pizza />
      <Salad />
      <Soup />
    </div>
  );
};

export default Menu;
