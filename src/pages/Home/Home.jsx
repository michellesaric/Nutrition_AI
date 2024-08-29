import Header from "../../components/Header/Header";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipeList } from "./homeJS";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="recipe-card-list">
        <div className="recipe-card-container">
          <h2 className="recipe-card-container__title">Trending recipes</h2>
          <div className="recipe-card__cards">
            {recipeList.map((recipe) => {
              return <RecipeCard recipe={recipe} />;
            })}
          </div>
        </div>
        <div className="recipe-card-container">
          <h2 className="recipe-card-container__title">
            Top 3 Healthiest recipes
          </h2>
          <div className="recipe-card__cards">
            {recipeList.map((recipe) => {
              return <RecipeCard recipe={recipe} />;
            })}
          </div>
        </div>
        <div className="recipe-card-container">
          <h2 className="recipe-card-container__title">
            Top 3 Unhealthiest recipes
          </h2>
          <div className="recipe-card__cards">
            {recipeList.map((recipe) => {
              return <RecipeCard recipe={recipe} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
