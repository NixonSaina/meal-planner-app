// /src/components/RecipeList.js
import React from "react";
import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ addToPlanner }) => {
  return (
    <div>
      <h2>Available Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} addToPlanner={addToPlanner} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
