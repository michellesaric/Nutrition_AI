import React from "react";
import SearchIcon from "../icons/SearchIcon";
import useFetchIngredients from "../../apiHooks/useFetchIngredients";

const SearchIngredients = ({ searchTerm, handleSaveIngredient }) => {
  const { ingredients } = useFetchIngredients(searchTerm);
  return (
    <div className="search-ingredients">
      {ingredients.map((ingredient) => {
        const parts = ingredient.ingredient.split(
          new RegExp(`(${searchTerm})`, "gi")
        );

        return (
          <div className="search-ingredients__wrapper" key={ingredient.id}>
            <SearchIcon />
            <p
              className="search-ingredients__item-ingredient"
              onClick={() => handleSaveIngredient(ingredient)}
            >
              {parts.map((part, index) =>
                part.toLowerCase() === searchTerm.toLowerCase() ? (
                  <span
                    className="search-ingredients__item-ingredient-bold"
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

export default SearchIngredients;
