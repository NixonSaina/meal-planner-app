// /src/components/MealPlanner.js
import React from "react";

const MealPlanner = ({ mealPlan, removeFromPlanner }) => {
  return (
    <div>
      <h2>Weekly Meal Plan</h2>
      {mealPlan.length > 0 ? (
        mealPlan.map((recipe, index) => (
          <div key={index} className="meal-plan-item">
            <h4>{recipe.name}</h4>
            <button onClick={() => removeFromPlanner(index)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No meals planned yet.</p>
      )}
    </div>
  );
};

export default MealPlanner;
