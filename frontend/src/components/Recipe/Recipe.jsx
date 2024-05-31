import ServingIcon from "../icons/ServingIcon";
import CalorieIcon from "../icons/CalorieIcon";
import ReviewIcon from "../icons/ReviewIcon";
import Interpunct from "../icons/Interpunct";
import LinkIcon from "../icons/LinkIcon";
import HighIcon from "../icons/HighIcon";
import ArrowDown from "../icons/ArrowDown";
import { useState } from "react";
import NutrientFacts from "../NutrientFacts/NutrientFacts";
import RecipeAdditionalInfo from "../RecipeAdditionalInfo/RecipeAdditionalInfo";

const Recipe = ({ recipe }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setIsToggle((prevToggle) => !prevToggle);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const iconStyle = {
    transform: isToggle ? "rotate(180deg)" : "none",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <>
      <div className="recipe">
        <div className="recipe__image"></div>
        <div className="recipe__content">
          <div className="recipe__category-button-wrapper">
            <div className="recipe__category">{recipe.category}</div>
            <button className="recipe__button">Add to list</button>
          </div>

          <h4 className="recipe__title">{recipe.recipe}</h4>

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

          <div className="divider"></div>

          <p className="recipe__macros-title">Macros*</p>

          <div className="recipe__macros">
            <div className="recipe__carbs-box">
              <div className="recipe__carbs">
                <p className="recipe__carbs-title">Carbs</p>
                <div className="recipe__carbs-score">
                  <HighIcon stroke="#EA4A5E" width="12px" height="12px" />
                  <p className="recipe__carbs-score-text">HIGH</p>
                </div>
              </div>
              <div className="recipe__carbs__progress-bar">
                <div
                  className="recipe__carbs__progress"
                  style={{ width: `${recipe.carbPer}%` }}
                ></div>
              </div>
              <div className="recipe__carbs__results">
                <p className="recipe__carbs__percentage">{recipe.carbPer}%</p>
                <p className="recipe__carbs__grams">210g</p>
              </div>
            </div>
            <div className="recipe__fats-box">
              <div className="recipe__fats">
                <p className="recipe__fats-title">Fats</p>
                <div className="recipe__fats-score">
                  <HighIcon stroke="#5C61E1" width="12px" height="12px" />
                  <p className="recipe__fats-score-text">OK</p>
                </div>
              </div>
              <div className="recipe__fats__progress-bar">
                <div
                  className="recipe__fats__progress"
                  style={{ width: `${recipe.fatPer}%` }}
                ></div>
              </div>
              <div className="recipe__fats__results">
                <p className="recipe__fats__percentage">{recipe.fatPer}%</p>
                <p className="recipe__fats__grams">50g</p>
              </div>
            </div>
            <div className="recipe__proteins-box">
              <div className="recipe__proteins">
                <p className="recipe__proteins-title">Protein</p>
                <div className="recipe__proteins-score">
                  <HighIcon stroke="#F89E52" width="12px" height="12px" />
                  <p className="recipe__proteins-score-text">LOW</p>
                </div>
              </div>
              <div className="recipe__proteins__progress-bar">
                <div
                  className="recipe__proteins__progress"
                  style={{ width: `${recipe.proteinPer}%` }}
                ></div>
              </div>
              <div className="recipe__proteins__results">
                <p className="recipe__proteins__percentage">
                  {recipe.proteinPer}%
                </p>
                <p className="recipe__proteins__grams">77g</p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="recipe__additional-scores">
            <div className="recipe__additional-score-title">
              <p>Additional scores</p>
              <div
                className="recipe__additional-score-icon"
                onClick={() => handleToggle()}
                style={iconStyle}
              >
                <ArrowDown />
              </div>
            </div>
            {isToggle && <RecipeAdditionalInfo recipe={recipe} />}
          </div>

          <div className="recipe__buttons">
            <button className="recipe__nutrients" onClick={handleOpenModal}>
              View nutrients
            </button>
            <button className="recipe__view-recipe">View recipe</button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <NutrientFacts recipe={recipe} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Recipe;
