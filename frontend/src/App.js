import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SearchProvider from "./context/SearchContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import CreateRecipe from "./CreateRecipe";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminAddIngredient from "./pages/AdminAddIngredient/AdminAddIngredient";
import AdminAddRecipe from "./pages/AdminAddRecipe/AdminAddRecipe";
import LoginForm from "./pages/Login/Login";

const AdminRoute = ({ element, ...rest }) => {
  const { user } = useAuth();
  return user && user.isAdmin ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/" element={<Home />} />
            <Route path="/recipe-list" element={<Recipes />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/admin-dashboard"
              element={<AdminRoute element={<AdminDashboard />} />}
            />
            <Route
              path="/admin-add-recipe"
              element={<AdminRoute element={<AdminAddRecipe />} />}
            />
            <Route
              path="/admin-add-ingredient"
              element={<AdminRoute element={<AdminAddIngredient />} />}
            />
          </Routes>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
