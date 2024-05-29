import SearchIcon from "../../icons/SearchIcon";
import ExitIcon from "../../icons/ExitIcon";

const SearchResult = ({
  ingredients,
  searchTerm = "",
  ingredientsArray,
  handleDeleteIngredient,
  handleSaveIngredient,
}) => {
  return (
    <div className="search-result">
      {ingredientsArray.length !== 0 && (
        <div className="selected-ingredients">
          <p className="selected-ingredients__text">Selected ingredients</p>
          <div className="selected-ingredients__tags">
            {ingredientsArray.map((ingredient) => (
              <div key={ingredient} className="selected-ingredients__tag">
                <p>{ingredient}</p>
                <div onClick={() => handleDeleteIngredient(ingredient)}>
                  {" "}
                  <ExitIcon />
                </div>
              </div>
            ))}
          </div>
          <hr className="selected-ingredients__line" />
        </div>
      )}

      {ingredients.map((ingredient) => {
        const parts = ingredient.ingredient.split(
          new RegExp(`(${searchTerm})`, "gi")
        );

        return (
          <div className="search-result__item" key={ingredient.id}>
            <SearchIcon />
            <p
              className="search-result__item-ingredient"
              onClick={() => handleSaveIngredient(ingredient.ingredient)}
            >
              {parts.map((part, index) =>
                part.toLowerCase() === searchTerm.toLowerCase() ? (
                  <span
                    className="search-result__item-ingredient-bold"
                    key={index}
                  >
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
