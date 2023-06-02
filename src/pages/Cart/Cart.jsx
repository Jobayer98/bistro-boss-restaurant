import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";
import Items from "./Items/Items";
const Cart = () => {
  const [cart] = useCart();

  const totalPrice = cart.reduce(
    (preValue, currentValue) => preValue + currentValue.price,
    0
  );
  return (
    <section className="bg-[#f6f6f6]">
      <div className="pt-24 max-w-screen-md mx-auto pb-12">
        <SectionTitle
          heading="wanna add more"
          subHeading="My Cart"
        ></SectionTitle>
        <div className="mt-12 pt-12 px-6 bg-white">
          <div className=" flex justify-between mb-6">
            <h1 className="text-xl uppercase font-semibold">
              Total orders: {cart?.length || 0}
            </h1>
            <h1 className="text-xl uppercase font-semibold">
              Total price: ${totalPrice}
            </h1>
            <button className="btn btn-sm bg-[#d1a054] border-0 hover:bg-[#e7b974]">
              pay
            </button>
          </div>
          <Items orders={cart} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
