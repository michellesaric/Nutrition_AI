import React, { useState, useContext } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import useFetchIngredients from "../../../apiHooks/useFetchIngredients";
import SearchResult from "./SearchResult/SearchResult";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { setSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const { ingredients, error } = useFetchIngredients(input);
  const navigate = useNavigate();

  const handleSaveIngredient = (ingredientName) => {
    const isDuplicate = ingredientsArray.some(
      (existingIngredient) => existingIngredient === ingredientName
    );

    if (!isDuplicate) {
      setIngredientsArray([...ingredientsArray, ingredientName]);
    }
  };

  const handleDeleteIngredient = (ingredientName) => {
    const newArray = ingredientsArray.filter(
      (ingred) => ingred !== ingredientName
    );
    setIngredientsArray(newArray);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFindRecipe = () => {
    if (ingredientsArray.length === 0) {
      return;
    } else {
      setSearch(ingredientsArray);
      navigate("/recipe-list");
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="search-bar">
        <div className="search-bar__wrapper">
          <SearchIcon />
          <input
            className="search-bar__input"
            placeholder="Search Ingredients"
            onChange={handleChange}
            value={input}
          />
        </div>
        <button
          className="search-bar__button"
          onClick={() => handleFindRecipe()}
        >
          Find recipes
        </button>
      </div>
      {input && (
        <SearchResult
          ingredients={ingredients}
          searchTerm={input}
          ingredientsArray={ingredientsArray}
          handleDeleteIngredient={handleDeleteIngredient}
          handleSaveIngredient={handleSaveIngredient}
        />
      )}
    </>
  );
};

export default SearchBar;
