import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Salads from "./SaladItems/Salads";
import Pizza from "./PizzaItems/Pizza";
import Soups from "./SoupItems/Soups";
import Desserts from "./DessertItems/Desserts";
import Drinks from "./DrinkItem/Drinks";

const TabSection = () => {
  return (
    <section className="max-w-screen-md mx-auto">
      <Tabs className="text-center mt-8 font-['Inter'] cursor-pointer">
        <TabList className="tabs uppercase justify-center ">
          <Tab className="tab tab-bordered text-[#BB8506] font-medium">
            Salad
          </Tab>
          <Tab className="tab tab-bordered text-[#BB8506] font-medium">
            pizza
          </Tab>
          <Tab className="tab tab-bordered text-[#BB8506] font-medium">
            soups
          </Tab>
          <Tab className="tab tab-bordered text-[#BB8506] font-medium">
            desserts
          </Tab>
          <Tab className="tab tab-bordered text-[#BB8506] font-medium">
            drinks
          </Tab>
        </TabList>

        <TabPanel className="mt-4">
          <Salads />
        </TabPanel>
        <TabPanel>
          <Pizza />
        </TabPanel>
        <TabPanel>
          <Soups />
        </TabPanel>
        <TabPanel>
          <Desserts />
        </TabPanel>
        <TabPanel>
          <Drinks />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default TabSection;
