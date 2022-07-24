import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvaiableMeal from "./AvaiableMeal";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvaiableMeal />
    </Fragment>
  );
};

export default Meals;
