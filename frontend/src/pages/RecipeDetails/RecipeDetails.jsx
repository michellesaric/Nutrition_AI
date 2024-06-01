import React from "react";
import Header from "../../components/Header/Header";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import RecipeGeneralInfo from "./RecipeGeneralInfo/RecipeGeneralInfo";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions";
import RecipeNutrientBalance from "./RecipeNutrientBalance/RecipeNutrientBalance";
import { recipe } from "./recipeJS";

const RecipeDetails = () => {
  return (
    <>
      <Header />
      <RecipeHeader recipe={recipe} />
      <div className="recipe-details">
        <div className="recipe-details__aside">
          <RecipeIngredients recipeIngredients={recipe.ingredients} />
          <RecipeInstructions recipe={recipe} />
          <RecipeNutrientBalance recipe={recipe} />
        </div>
        <RecipeGeneralInfo recipe={recipe} />
      </div>
    </>
  );
};

export default RecipeDetails;
