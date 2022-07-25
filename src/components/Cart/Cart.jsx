import { useCart } from "../../store";
import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart, totalAmount, addItem, removeItem } = useCart();
  const totalAmountCart = `$${totalAmount.toFixed(2)}`;
  const hasItems = cart.length > 0;
  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id + Math.random().toString()}
            {...item}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountCart}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
