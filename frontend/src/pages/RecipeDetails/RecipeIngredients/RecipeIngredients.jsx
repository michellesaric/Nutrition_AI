const RecipeIngredients = ({ recipeIngredients }) => {
  return (
    <section className="recipe-ingredients">
      <h3 className="recipe-ingredients__title">Ingredients</h3>
      <div className="divider"></div>
      <div className="recipe-ingredients__list">
        {recipeIngredients.map((ingredient) => {
          return (
            <p key={ingredient.id} className="recipe-ingredients__ingredient">
              {ingredient.ingredient}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default RecipeIngredients;
