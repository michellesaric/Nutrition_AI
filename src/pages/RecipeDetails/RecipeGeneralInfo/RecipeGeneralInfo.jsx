import HighIcon from "../../../components/icons/HighIcon";

const RecipeGeneralInfo = ({ recipe }) => {
  return (
    <section className="recipe-general-info">
      <div className="recipe-general-info__title-wrapper">
        <h3 className="recipe-general-info__title">General info</h3>
        <div className="divider"></div>
      </div>

      <p className="recipe-general-info__macro-title">Macros*</p>

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
            <p className="recipe__proteins__percentage">{recipe.proteinPer}%</p>
            <p className="recipe__proteins__grams">77g</p>
          </div>
        </div>
      </div>

      <div className="recipe-general-info__nrf-wrapper nrf">
        <p className="recipe-general-info__nrf-title">Nutrient Rich Score:</p>
        <div className="recipe-general-info__nrf-box">
          <div className="recipe-general-info__nrf-text-box">
            <p className="recipe-general-info__nrf">{recipe.nrf}</p>
            <p className="recipe-general-info__nrf-text">according to RACC</p>
          </div>
          <div className="recipe-general-info__nrf-text-box">
            <p className="recipe-general-info__nrf">{recipe.nrf2}</p>
            <p className="recipe-general-info__nrf-text">
              according to 100 kcal
            </p>
          </div>
        </div>
      </div>

      <div className="recipe-general-info__nrf-wrapper">
        <p className="recipe-general-info__nrf-title">
          General recipe score of NRF:
        </p>
        <div className="recipe-general-info__nrf-box">
          <div className="recipe-general-info__nrf-text-box">
            <p className="recipe-general-info__nrf">
              {recipe.cumulativeScore1}
            </p>
            <p className="recipe-general-info__nrf-text">
              Cogent Confabulation Method between (0,1)
            </p>
          </div>
          <div className="recipe-general-info__nrf-text-box">
            <p className="recipe-general-info__nrf">{recipe.nrf2}</p>
            <p className="recipe-general-info__nrf-text">
              Cogent Confabulation Method between (0,1)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeGeneralInfo;
