import React from "react";
import SearchIcon from "../icons/SearchIcon";
import useFetchIngredients from "../../apiHooks/useFetchIngredients";
import { Link } from "react-router-dom";

const SearchIngredients = ({ searchTerm, handleSaveIngredient }) => {
  const { ingredients } = useFetchIngredients(searchTerm);

  return (
    <div
      className={`search-ingredients ${
        ingredients.length === 0 ? "no-ingredients" : ""
      }`}
    >
      {ingredients.length !== 0 ? (
        <>
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
        </>
      ) : (
        <>
          <h5 className="no-ingredients__title">
            Oops! Seems we don't have what you're looking for.
          </h5>
          <Link to="/admin-add-ingredient">
            <button className="no-ingredients__button">Add ingredient</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SearchIngredients;
