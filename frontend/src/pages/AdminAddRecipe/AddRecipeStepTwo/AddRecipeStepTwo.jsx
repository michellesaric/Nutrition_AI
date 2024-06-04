import React, { useState } from "react";
import SearchIcon from "../../../components/icons/SearchIcon";
import ArrowDown from "../../../components/icons/ArrowDown";
import ExitIcon from "../../../components/icons/ExitIcon";
import SearchIngredients from "../../../components/SearchIngredients/SearchIngredients";

const AddRecipeStepTwo = ({ formData, setFormData }) => {
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSaveIngredient = (ingredient) => {
    if (
      ingredients.some(
        (existingIngredient) => existingIngredient.id === ingredient.id
      )
    ) {
      return;
    }

    const newIngredient = {
      id: ingredient.id,
      ingredient: ingredient.ingredient,
      ingredientAmount: null,
      ingredientUnit: "",
      ingredientAmountWeightG: null,
    };
    setIngredients([...ingredients, newIngredient]);
    setSearchTerm("");
  };

  const updateIngredientAmount = (id, event) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.id === id
          ? { ...ingredient, ingredientAmount: event.target.value }
          : ingredient
      )
    );
  };

  return (
    <section className="add-recipe-step-two">
      <h2 className="add-recipe-step-two__title">Add ingredients</h2>
      <div className="add-recipe-step-two__wrapper">
        <div className="add-recipe-step-two__search-ingredients">
          <SearchIcon />
          <input
            className="add-recipe-step-two__ingredients-input"
            placeholder="Search ingredients"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <div className="add-recipe-step-two__search-units">
          <input
            className="add-recipe-step-two__unit-input"
            placeholder="Unit"
            disabled
          />
          <ArrowDown />
        </div>
      </div>

      {searchTerm && (
        <SearchIngredients
          searchTerm={searchTerm}
          handleSaveIngredient={handleSaveIngredient}
        />
      )}

      <div className="add-recipe-step-two__header">
        <h4 className="add-recipe-step-two__header-text">Ingredient</h4>
        <h4 className="add-recipe-step-two__header-text">Measurement</h4>
        <h4 className="add-recipe-step-two__header-text">*Description</h4>
      </div>

      {ingredients.length === 0 ? (
        <p className="add-recipe-step-two__no-ingredients">
          No ingredients added yet
        </p>
      ) : (
        <div className="add-recipe-step-two__ingredient-list">
          {ingredients.map((ingredient, index) => {
            return (
              <div
                className="add-recipe-step-two__ingredient-box"
                style={{
                  background: index % 2 !== 0 ? "#ffffff" : "transparent",
                }}
              >
                <div className="add-recipe-step-two__name-unit-box">
                  <div className="add-recipe-step-two__ingredient-name-wrapper">
                    <div>
                      <ExitIcon />
                    </div>
                    <h4 className="add-recipe-step-two__ingredient-name">
                      {ingredient.ingredient}
                    </h4>
                  </div>
                  <div className="add-recipe-step-two__ingredient-amount-wrapper">
                    <div className="add-recipe-step-two__ingredient-amount-box">
                      <input
                        className="add-recipe-step-two__ingredient-amount-box-input"
                        placeholder="100"
                        onChange={(e) =>
                          updateIngredientAmount(ingredient.id, e)
                        }
                      />
                    </div>
                    <div className="add-recipe-step-two__ingredient-unit-box">
                      <input
                        className="add-recipe-step-two__ingredient-unit-box-input"
                        placeholder="Unit"
                        disabled
                      />
                      <ArrowDown />
                    </div>
                  </div>
                </div>
                <div className="add-recipe-step-two__ingredient-description">
                  Added
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default AddRecipeStepTwo;
