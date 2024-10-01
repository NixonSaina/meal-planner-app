// /src/pages/Shopping.js
import React from "react";
import ShoppingList from "../components/ShoppingList";

const Shopping = ({ mealPlan }) => {
  return (
    <div>
      <h1>My Shopping List</h1>
      <ShoppingList mealPlan={mealPlan} />
    </div>
  );
};

export default Shopping;
