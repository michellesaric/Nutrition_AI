import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import ServingIcon from "../../../components/icons/ServingIcon";
import CalorieIcon from "../../../components/icons/CalorieIcon";
import ReviewIcon from "../../../components/icons/ReviewIcon";
import LinkIcon from "../../../components/icons/LinkIcon";
import Interpunct from "../../../components/icons/Interpunct";

const RecipeHeader = ({ recipe }) => {
  const { search } = useContext(SearchContext);
  return (
    <section className="recipe-header">
      <div className="recipe-header__container">
        <div className="recipe-header__image-title-link-wrapper">
          <div className="recipe-header__image-title-wrapper">
            <div className="recipe-header__image"></div>
            <div>
              <h1 className="recipe-header__recipe-title">{recipe.recipe}</h1>
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

        <div className="recipe-header__ingredients-category-wrapper">
          <div className="recipe-header__ingredients-wrapper">
            <p className="recipe-header__ingredients-title">
              Selected ingredients
            </p>
            <div className="recipe-header__ingredients">
              {search.map((serachedIngredients) => {
                return (
                  <div
                    key={serachedIngredients}
                    className="recipe-header__ingredient"
                  >
                    {serachedIngredients}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recipe-header__category">{recipe.category}</div>
        </div>
      </div>
    </section>
  );
};

export default RecipeHeader;
