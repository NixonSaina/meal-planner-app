// /src/pages/Home.js
import React, { useState } from "react";
import RecipeList from "../components/RecipeList";
import MealPlanner from "../components/MealPlanner";

const Home = () => {
  const [mealPlan, setMealPlan] = useState([]);

  const addToPlanner = (recipe) => {
    setMealPlan([...mealPlan, recipe]);
  };

  const removeFromPlanner = (index) => {
    const updatedPlan = mealPlan.filter((_, i) => i !== index);
    setMealPlan(updatedPlan);
  };

  return (
    <div>
      <RecipeList addToPlanner={addToPlanner} />
      <MealPlanner mealPlan={mealPlan} removeFromPlanner={removeFromPlanner} />
    </div>
  );
};

export default Home;
