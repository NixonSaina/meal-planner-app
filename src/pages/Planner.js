// /src/pages/Planner.js
import React from "react";
import MealPlanner from "../components/MealPlanner";

const Planner = ({ mealPlan, removeFromPlanner }) => {
  return (
    <div>
      <h1>My Meal Plan</h1>
      <MealPlanner mealPlan={mealPlan} removeFromPlanner={removeFromPlanner} />
    </div>
  );
};

export default Planner;
