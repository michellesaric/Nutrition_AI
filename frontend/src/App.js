import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateRecipe from "./CreateRecipe";
import CategoryList from "./CategoryList";
import Home from "./pages/Home/Home";


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
