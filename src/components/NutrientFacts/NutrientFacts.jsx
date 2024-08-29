import { nutrients } from "./nutrientJS";
import Nutrient from "../Nutrient/Nutrient";
import ExitIcon from "../icons/ExitIcon";

const NutrientFacts = ({ recipe, setIsModalOpen }) => {
  return (
    <section className="nutrient-facts">
      <div className="nutrient-facts__box">
        <div className="nutrient-facts__title-icon-wrapper">
          <h2 className="nutrient-facts__title">Nutrient facts</h2>
          <div onClick={() => setIsModalOpen(false)}>
            <ExitIcon />
          </div>
        </div>
        <p className="nutrient-facts__recipe-title">{recipe.recipe}</p>
        <p className="nutrient-facts__recipe-servings">
          Serves: {recipe.servings}
        </p>
        <div className="nutrient-facts__calorie-wrap">
          <h4 className="nutrient-facts__calorie-text">
            Calories per serving:
          </h4>
          <h2 className="nutrient-facts__calories">{recipe.calories} kcal</h2>
        </div>
        <div className="nutrient-facts__daily-value">% Daily Value</div>
        {nutrients.map((nutrient) => {
          return (
            <Nutrient
              key={nutrient.id}
              nutrientName={nutrient.nutrientName}
              nutrientGrams={nutrient.nutrientGrams}
              nutrientPercentage={nutrient.nutrientPercentage}
            />
          );
        })}
        <div className="extra-margin"></div>
        <p className="nutrient-facts__explanation">
          *The Daily Value tells you how much a nutrient in a serving of food
          contributes to a daily diet of 2,000 kcals a day is used for general
          nutrition advice.
        </p>
        <p className="nutrient-facts__explanation">
          **Nutrient information is not available for all ingredients. Amount is
          based on available nutrient data.
        </p>
        <p className="nutrient-facts__explanation">
          - Information is not currently available for this nutrient.
        </p>
        <p className="nutrient-facts__explanation">
          If you are following a medically restrictive diet, please consult your
          doctor or registered dietitian before preparing this recipe for
          personal consumption.
        </p>
        <p className="nutrient-facts__tag">Powered by Michelle Šarić</p>
      </div>
    </section>
  );
};

export default NutrientFacts;
