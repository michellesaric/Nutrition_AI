import DoughnutChart from "../../../components/DoughnutChart/DoughnutChart";
import NutrientCard from "../../../components/NutrientCard/NutrientCard";
import { nutrients } from "./nutrientsJS";

const RecipeNutrientBalance = ({ recipe }) => {
  const percentages = [recipe.carbPer, recipe.fatPer, recipe.proteinPer];
  const colors = ["#2A8460", "#4A4995", "#F89E52"];
  const centerText = `${recipe.calories} kcal`;

  return (
    <section className="recipe-nutrient-balance">
      <div className="recipe-nutrient-balance__title-wrapper">
        <h2 className="recipe-nutrient-balance__title">Nutrient balance</h2>
        <div className="divider"></div>
      </div>
      <div className="recipe-nutrient-balance__macro-stats">
        <DoughnutChart
          percentages={percentages}
          colors={colors}
          cutout="80%"
          centerText={centerText}
        />
        <div className="recipe-nutrient-balance__macros">
          <div className="recipe-nutrient-balance__macro-wrapper">
            <p className="recipe-nutrient-balace__macro carbs">
              {recipe.carbPer}%
            </p>
            <h3 className="recipe-nutrient-balance__grams">46.3 g</h3>
            <p className="recipe-nutrient-balance__macro-title">Carbs</p>
          </div>
          <div className="recipe-nutrient-balance__macro-wrapper">
            <p className="recipe-nutrient-balace__macro fat">
              {recipe.fatPer}%
            </p>
            <h3 className="recipe-nutrient-balance__grams">22.6 g</h3>
            <p className="recipe-nutrient-balance__macro-title">Fat</p>
          </div>
          <div className="recipe-nutrient-balance__macro-wrapper">
            <p className="recipe-nutrient-balace__macro protein">
              {recipe.proteinPer}%
            </p>
            <h3 className="recipe-nutrient-balance__grams">20.5 g</h3>
            <p className="recipe-nutrient-balance__macro-title">Protein</p>
          </div>
        </div>
      </div>

      <div className="recipe-nutrient-balance__list">
        <div className="recipe-nutrient-balance__list-header">
          <p className="recipe-nutrient-balance__header-title">Total</p>
          <p className="recipe-nutrient-balance__header-title">Goal</p>
          <p className="recipe-nutrient-balance__header-title">Left</p>
        </div>

        {nutrients.map((nutrient) => {
          return <NutrientCard nutrient={nutrient} />;
        })}
      </div>
    </section>
  );
};

export default RecipeNutrientBalance;
