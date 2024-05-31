import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchProvider from "./context/SearchContext";
import CreateRecipe from "./CreateRecipe";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipe-list" element={<Recipes />} />
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
