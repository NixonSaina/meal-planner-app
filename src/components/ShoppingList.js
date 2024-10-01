// /src/components/ShoppingList.js
import React from "react";

const ShoppingList = ({ mealPlan }) => {
  const generateShoppingList = () => {
    const ingredientMap = {};

    mealPlan.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if (ingredientMap[ingredient.name]) {
          ingredientMap[ingredient.name] += `, ${ingredient.quantity}`;
        } else {
          ingredientMap[ingredient.name] = ingredient.quantity;
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
          {Object.entries(shoppingList).map(([ingredient, quantity], index) => (
            <li key={index}>
              {ingredient}: {quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients needed.</p>
      )}
    </div>
  );
};

export default ShoppingList;
