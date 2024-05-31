import React from "react";
import Header from "../../components/Header/Header";
import RecipeHeader from "./RecipeHeader/RecipeHeader";
import { recipe } from "./recipeJS";

const RecipeDetails = () => {
  return (
    <>
      <Header />
      <RecipeHeader recipe={recipe} />
    </>
  );
};

export default RecipeDetails;
