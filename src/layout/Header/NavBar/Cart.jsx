import { HiOutlineShoppingCart } from "react-icons/hi";
const Cart = () => {
  return (
    <div className="text-2xl mr-6">
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">99+</span>
        <button className="btn">
          <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Cart;
