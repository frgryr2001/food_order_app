import CartContext from "./cart-context";
import { useContext } from "react";

export const useCart = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
