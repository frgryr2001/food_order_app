import React from "react";

const CartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});
export default CartContext;
