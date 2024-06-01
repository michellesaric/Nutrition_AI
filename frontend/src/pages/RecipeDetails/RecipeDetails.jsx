import React from "react";
import Header from "../../components/Header/Header";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import RecipeGeneralInfo from "./RecipeGeneralInfo/RecipeGeneralInfo";
import { recipe } from "./recipeJS";

const RecipeDetails = () => {
  return (
    <>
      <Header />
      <RecipeHeader recipe={recipe} />
      <div className="recipe-details">
        <RecipeGeneralInfo recipe={recipe} />
      </div>
    </>
  );
};

export default RecipeDetails;
