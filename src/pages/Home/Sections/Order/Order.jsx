import SectionTitle from "../../../../components/SectionTitle";
import OrderSwiper from "./OrderSwiper";

const Order = () => {
  return (
    <section className="my-16">
      <SectionTitle
        heading="Order online"
        subHeading="from 11:00am to 10:00pm"
      />
      <div className="w-full lg:w-[71%] mx-auto">
        <OrderSwiper />
      </div>
    </section>
  );
};

export default Order;
