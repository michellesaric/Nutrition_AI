import React from "react";
import Header from "../../components/Header/Header";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import RecipeGeneralInfo from "./RecipeGeneralInfo/RecipeGeneralInfo";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions";
import { recipe } from "./recipeJS";

const RecipeDetails = () => {
  return (
    <>
      <Header />
      <RecipeHeader recipe={recipe} />
      <div className="recipe-details">
        <div>
          <RecipeIngredients recipeIngredients={recipe.ingredients} />
          <RecipeInstructions recipe={recipe} />
        </div>
        <RecipeGeneralInfo recipe={recipe} />
      </div>
    </>
  );
};

export default RecipeDetails;
