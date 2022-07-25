import CartContext from "./cart-context";
import { useReducer } from "react";

const initState = {
  cart: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cart[existingCartItemIndex];
      let updatedCart;
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount * 1 + action.payload.amount * 1,
        };
        updatedCart = [...state.cart];
        updatedCart[existingCartItemIndex] = updatedCartItem;
      } else {
        updatedCart = [...state.cart, action.payload];
      }

      return {
        cart: updatedCart,
        totalAmount: updateTotalAmount,
      };

    case "REMOVE_ITEM":
      const ExistingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      const ExistingCartItem = state.cart[ExistingCartItemIndex];
      const UpdateTotalAmount = state.totalAmount - ExistingCartItem.price;

      let UpdatedCart;
      if (ExistingCartItem.amount * 1 === 1) {
        UpdatedCart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        const UpdatedCarts = {
          ...ExistingCartItem,
          amount: ExistingCartItem.amount - 1,
        };
        UpdatedCart = [...state.cart];
        UpdatedCart[ExistingCartItemIndex] = UpdatedCarts;
      }
      return {
        cart: UpdatedCart,
        totalAmount: UpdateTotalAmount,
      };
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
