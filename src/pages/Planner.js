// /src/pages/Planner.js
import React, { useState } from "react";
import MealPlanner from "../components/MealPlanner";

const Planner = ({ mealPlan, addToPlanner, removeFromPlanner }) => {
  // State for the form input fields
  const [mealName, setMealName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Handle form submission to add a custom meal
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the ingredients array from the input string
    const ingredientsArray = ingredients.split(",").map((item) => {
      const [name, quantity] = item.split(":").map((s) => s.trim());
      return { name, quantity };
    });

    // Create a new recipe object
    const newRecipe = {
      id: mealPlan.length + 1, // Simple id generation based on the number of meals
      name: mealName,
      ingredients: ingredientsArray,
      instructions: steps,
    };

    // Add the new recipe to the meal plan
    addToPlanner(newRecipe);

    // Clear the form fields
    setMealName("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div>
      <h1>My Meal Plan</h1>

      {/* Form for adding custom meals */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Meal Name:</label>
          <input
            type="text"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ingredients (comma-separated, e.g., Spaghetti:200g, Beef:300g):</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Preparation Steps:</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Add Meal</button>
      </form>

      {/* Display the meal plan */}
      <MealPlanner mealPlan={mealPlan} removeFromPlanner={removeFromPlanner} />
    </div>
  );
};

export default Planner;
