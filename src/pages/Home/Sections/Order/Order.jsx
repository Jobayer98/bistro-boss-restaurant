import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import OrderSwiper from "./OrderSwiper";

const Order = () => {
  return (
    <section className="my-16 max-w-4xl mx-auto">
      <SectionTitle
        heading="Order online"
        subHeading="from 11:00am to 10:00pm"
      />
      <div>
        <OrderSwiper />
      </div>
    </section>
  );
};

export default Order;
