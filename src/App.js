// /src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Shopping from "./pages/Shopping";

function App() {
  const [mealPlan, setMealPlan] = useState([]);

  const addToPlanner = (recipe) => {
    setMealPlan([...mealPlan, recipe]);
  };

  const removeFromPlanner = (index) => {
    const updatedPlan = mealPlan.filter((_, i) => i !== index);
    setMealPlan(updatedPlan);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/planner">Meal Planner</Link> |{" "}
        <Link to="/shopping">Shopping List</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home addToPlanner={addToPlanner} mealPlan={mealPlan} />}
        />
        <Route
          path="/planner"
          element={
            <Planner
              mealPlan={mealPlan}
              addToPlanner={addToPlanner}
              removeFromPlanner={removeFromPlanner}
            />
          }
        />
        <Route path="/shopping" element={<Shopping mealPlan={mealPlan} />} />
      </Routes>
    </Router>
  );
}

export default App;
