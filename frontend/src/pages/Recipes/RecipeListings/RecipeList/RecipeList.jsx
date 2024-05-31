import { recipeList } from "./recipeListJS";
import Recipe from "../../../../components/Recipe/Recipe";

const RecipeList = () => {
  return (
    <section className="recipe-list">
      {recipeList.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </section>
  );
};

export default RecipeList;
