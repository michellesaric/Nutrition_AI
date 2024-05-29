import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchProvider from "./context/SearchContext";
import CreateRecipe from "./CreateRecipe";
import CategoryList from "./CategoryList";
import Home from "./pages/Home/Home";
import RecipeList from "./pages/RecipeList/RecipeList";

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipe-list" element={<RecipeList />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
