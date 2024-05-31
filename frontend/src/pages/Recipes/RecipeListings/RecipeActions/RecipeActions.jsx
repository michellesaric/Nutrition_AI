import { useContext, useState } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import ExitIcon from "../../../../components/icons/ExitIcon";
import ArrowDown from "../../../../components/icons/ArrowDown";
import RecipeActionsSort from "./RecipeActionsSort/RecipeActionsSort";

const RecipeActions = ({ sortString, setSortString }) => {
  const { search, setSearch } = useContext(SearchContext);
  const [toggle, setToggle] = useState(false);

  const handleDeleteIngredient = (searchedInredient) => {
    const newArray = search.filter((ingred) => ingred !== searchedInredient);
    setSearch(newArray);
  };

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <section className="recipe-actions">
      <div className="recipe-actions__ingredients">
        <p className="recipe-actions__title">Selected Ingredients</p>
        <div className="recipe-actions__ingredients-wrapper">
          {search.map((searchedIngredient) => {
            return (
              <div
                key={searchedIngredient}
                className="recipe-actions__ingredient-box"
              >
                <p className="recipe-actions__ingredient">
                  {searchedIngredient}
                </p>
                <div onClick={() => handleDeleteIngredient(searchedIngredient)}>
                  <ExitIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recipe-actions__sort-download">
        <div className="recipe-actions__sort">
          <p className="recipe-actions__sort-text">Sort by:</p>
          <div className="recipe-actions__sort-box">
            <input
              placeholder="Score"
              value={sortString || ""}
              className="recipe-actions__sort-input"
              disabled
            />
            <div
              className={
                toggle
                  ? "recipe-actions__sort-reverse-icon"
                  : "recipe-actions__sort-icon"
              }
              onClick={handleToggle}
            >
              <ArrowDown />
            </div>
          </div>
          {toggle && (
            <RecipeActionsSort
              setSortString={setSortString}
              setToggle={setToggle}
            />
          )}
        </div>
        <div className="recipe-actions__download">
          <button className="recipe-actions__download-button">
            Download recipes(0)
          </button>
          <button className="recipe-actions__view-selected-recipes">
            View selected recipes(0)
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipeActions;
