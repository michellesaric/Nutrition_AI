import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateRecipe from "./CreateRecipe";
import CategoryList from "./CategoryList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create-recipe">Create Recipe</Link>
            </li>
            <li>
              <Link to="/categories">Show categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/categories" element={<CategoryList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
