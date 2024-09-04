import React, { useState } from "react";
import SearchIcon from "../../../components/icons/SearchIcon";
import ArrowDown from "../../../components/icons/ArrowDown";
import ExitIcon from "../../../components/icons/ExitIcon";
import SearchIngredients from "../../../components/SearchIngredients/SearchIngredients";
import UnitModal from "../../../components/UnitModal/UnitModal";
import { convertUnitsToGrams } from "../../../utils/convertUnitsToGrams";

const AddRecipeStepTwo = ({ formData, setFormData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIngredientId, setActiveIngredientId] = useState(null);

  const handleSaveIngredient = (ingredient) => {
    if (
      formData.ingredients.some(
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
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, newIngredient],
    });
    setSearchTerm("");
  };

  const updateIngredientAmount = (id, event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.map((ingredient) => {
        if (ingredient.id === id) {
          const updatedIngredient = { ...ingredient, ingredientAmount: value };

          if (ingredient.ingredientUnit) {
            updatedIngredient.ingredientAmountWeightG = convertUnitsToGrams(
              ingredient.ingredientUnit,
              value
            );
          }

          return updatedIngredient;
        }
        return ingredient;
      }),
    }));
  };

  const toggleUnitModal = (id) => {
    setActiveIngredientId((prevId) => (prevId === id ? null : id));
  };

  const handleUnitSelect = (id, unit) => {
    setFormData((prevData) => ({
      ...prevData,
      ingredients: prevData.ingredients.map((ingredient) => {
        if (ingredient.id === id) {
          const ingredientAmountWeightG = convertUnitsToGrams(
            unit,
            ingredient.ingredientAmount
          );
          return {
            ...ingredient,
            ingredientUnit: unit,
            ingredientAmountWeightG,
          };
        }
        return ingredient;
      }),
    }));
    setActiveIngredientId(null);
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

        <p className="add-recipe-step-two__search-instruction">
          If an ingredient is a piece (e.g., one potato..), please put an
          approximate weight in grams.
        </p>
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

      {formData.ingredients.length === 0 ? (
        <p className="add-recipe-step-two__no-ingredients">
          No ingredients added yet
        </p>
      ) : (
        <div className="add-recipe-step-two__ingredient-list">
          {formData.ingredients.map((ingredient, index) => (
            <div
              key={ingredient.id}
              className="add-recipe-step-two__ingredient-box"
              style={{
                background: index % 2 !== 0 ? "#ffffff" : "transparent",
              }}
            >
              <div className="add-recipe-step-two__name-unit-box">
                <div className="add-recipe-step-two__ingredient-name-wrapper">
                  <ExitIcon />
                  <h4 className="add-recipe-step-two__ingredient-name">
                    {ingredient.ingredient}
                  </h4>
                </div>
                <div className="add-recipe-step-two__ingredient-amount-wrapper">
                  <div className="add-recipe-step-two__ingredient-amount-box">
                    <input
                      type="number"
                      className="add-recipe-step-two__ingredient-amount-box-input"
                      placeholder="100"
                      onChange={(e) => updateIngredientAmount(ingredient.id, e)}
                      value={ingredient.ingredientAmount || ""}
                    />
                  </div>
                  <div className="add-recipe-step-two__ingredient-unit-box">
                    <input
                      className="add-recipe-step-two__ingredient-unit-box-input"
                      placeholder="Unit"
                      disabled
                      value={ingredient.ingredientUnit}
                    />
                    {ingredient.ingredientAmount && (
                      <div
                        style={{
                          transform:
                            activeIngredientId === ingredient.id
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                        onClick={() => toggleUnitModal(ingredient.id)}
                      >
                        <ArrowDown />
                      </div>
                    )}
                    {activeIngredientId === ingredient.id && (
                      <UnitModal
                        handleUnitSelect={(unit) =>
                          handleUnitSelect(ingredient.id, unit)
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="add-recipe-step-two__ingredient-description">
                Added
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AddRecipeStepTwo;
