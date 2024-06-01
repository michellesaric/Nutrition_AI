import React from "react";
import Header from "../../components/Header/Header";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import RecipeGeneralInfo from "./RecipeGeneralInfo/RecipeGeneralInfo";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import { recipe } from "./recipeJS";

const RecipeDetails = () => {
  return (
    <>
      <Header />
      <RecipeHeader recipe={recipe} />
      <div className="recipe-details">
        <div>
          <RecipeIngredients recipeIngredients={recipe.ingredients} />
        </div>
        <RecipeGeneralInfo recipe={recipe} />
      </div>
    </>
  );
};

export default RecipeDetails;
