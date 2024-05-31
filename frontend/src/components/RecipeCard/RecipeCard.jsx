import React from "react";
import ServingIcon from "../icons/ServingIcon";
import Interpunct from "../icons/Interpunct";
import CalorieIcon from "../icons/CalorieIcon";
import ReviewIcon from "../icons/ReviewIcon";
import LinkIcon from "../icons/LinkIcon";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card__image"></div>
      <div className="recipe-card__content">
        <div>
          <div className="recipe-card__category">{recipe.category}</div>
          <h4 className="recipe-card__title">{recipe.recipe}</h4>
          <div className="recipe__serving-calories-reviews-wrapper">
            <div className="recipe__serving">
              <ServingIcon />
              <p className="recipe__serving-text">
                Serves: <span>{recipe.servings}</span>
              </p>
            </div>
            <Interpunct />
            <div className="recipe__calories">
              <CalorieIcon />
              <p className="recipe__calories-text">
                Calories: <span>{recipe.calories} kcal</span>
              </p>
            </div>
            <Interpunct />
            <div className="recipe__reviews">
              <ReviewIcon />
              <p className="recipe__reviews-text">
                Reviews: <span>5</span>
              </p>
            </div>
          </div>
          <a
            href={recipe.url}
            className="recipe__link"
            aria-label={recipe.recipe}
          >
            Go to source
            <LinkIcon />
          </a>
        </div>
        <div className="recipe__buttons">
          <button className="recipe__nutrients">View nutrients</button>
          <button className="recipe__view-recipe">View recipe</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
