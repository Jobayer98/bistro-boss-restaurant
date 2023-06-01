import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Items from "./Items/Items";
const Cart = () => {
  return (
    <section className="bg-[#f6f6f6]">
      <div className="pt-24 max-w-screen-md mx-auto pb-12">
        <SectionTitle
          heading="wanna add more"
          subHeading="My Cart"
        ></SectionTitle>
        <div className="mt-12 bg-white">
          <div className=" flex justify-between">
            <h1 className="text-xl uppercase font-semibold">Total orders</h1>
            <h1 className="text-xl uppercase font-semibold">Total price</h1>
            <button className="btn btn-sm bg-[#d1a054] border-0 hover:bg-[#e7b974]">
              pay
            </button>
          </div>
          <Items />
        </div>
      </div>
    </section>
  );
};

export default Cart;
