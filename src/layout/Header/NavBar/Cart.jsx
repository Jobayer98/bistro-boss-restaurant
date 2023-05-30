import { HiOutlineShoppingCart } from "react-icons/hi";
const Cart = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <HiOutlineShoppingCart />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
      ></div>
    </div>
  );
};

export default Cart;
