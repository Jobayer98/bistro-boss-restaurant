import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((preItem) => [...preItem, item]);
  };

  const removeItem = (id) => {
    const items = items.filter((item) => item.id !== id);
    setItems(items);
  };

  const cartInfo = {
    items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
