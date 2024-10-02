// /src/components/ShoppingList.js
import React from "react";

const ShoppingList = ({ mealPlan }) => {
  // Generate the shopping list from the meal plan
  const generateShoppingList = () => {
    const ingredientMap = {};

    // Check if the mealPlan has any recipes
    if (mealPlan.length === 0) {
      return {};
    }

    // Aggregate ingredients from each recipe in the meal plan
    mealPlan.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        // If the ingredient is already in the map, concatenate the quantities
        if (ingredientMap[ingredient.name]) {
          ingredientMap[ingredient.name].push(ingredient.quantity);
        } else {
          ingredientMap[ingredient.name] = [ingredient.quantity];
        }
      });
    });

    return ingredientMap;
  };

  const shoppingList = generateShoppingList();

  return (
    <div>
      <h2>Shopping List</h2>
      {Object.keys(shoppingList).length > 0 ? (
        <ul>
          {Object.entries(shoppingList).map(([ingredient, quantities], index) => (
            <li key={index}>
              {ingredient}: {quantities.join(", ")}
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients needed or no recipes in the meal plan.</p>
      )}
    </div>
  );
};

export default ShoppingList;
