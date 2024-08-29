import Interpunct from "../../../components/icons/Interpunct";

const RecipeInstructions = ({ recipe }) => {
  return (
    <section className="recipe-instructions">
      <div className="recipe-instructions__title-time-wrapper">
        <div>
          <h3 className="recipe-instructions__title">Instructions</h3>
          <div className="divider"></div>
        </div>
        <div className="recipe-instructions__time-wrapper">
          <p className="recipe-instructions__time">
            Prep time: <span>{recipe.prepTime}</span>
          </p>
          <Interpunct />
          <p className="recipe-instructions__time">
            Cook time: <span>{recipe.cookTime}</span>
          </p>
          <Interpunct />
          <p className="recipe-instructions__time">
            Overall: <span>{recipe.readyTime}</span>
          </p>
        </div>
      </div>

      <div className="recipe-instructions__list">
        {recipe.instructions.map((instruction) => {
          return (
            <div
              key={instruction.id}
              className="recipe-instructions__instructions"
            >
              <p className="recipe-instructions__step">{instruction.id}</p>
              <p className="recipe-instructions__instruction">
                {instruction.instruction}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeInstructions;
