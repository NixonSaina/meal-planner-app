// /src/components/RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe, addToPlanner }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <button onClick={() => addToPlanner(recipe)}>Add to Meal Plan</button>
    </div>
  );
};

export default RecipeCard;
