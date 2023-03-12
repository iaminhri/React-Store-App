import React, { Fragment } from "react";
import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummery";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <MealsAvailable />
        </Fragment>
    )
};

export default Meals;