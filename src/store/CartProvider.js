import CartContext from "./cart-context";
import { useReducer } from "react";

const initState = {
  cart: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        cart: [...state.cart, action.payload],
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };

    case "REMOVE_ITEM":
      break;
    default:
      return initState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", payload: id });
  };
  const cartContext = {
    cart: cartState.cart,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
