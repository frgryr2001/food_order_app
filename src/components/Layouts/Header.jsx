import { Fragment } from "react";
import MealImage from "../../assets/img/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
