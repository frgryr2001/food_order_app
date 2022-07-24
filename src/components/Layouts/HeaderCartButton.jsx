import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useCart } from "../../store";
const HeaderCartButton = (props) => {
  const { cart } = useCart();

  const numberOfCart = cart.reduce((acc, curr) => {
    return acc + curr.amount * 1;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
