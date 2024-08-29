import React, { useState } from "react";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    recipe: "",
    recipeHr: "",
    description: "",
    author: "",
    prepTime: "",
    cookTime: "",
    readyTime: "",
    servings: "",
    categoryId: "",
    ingredients: [],
    instructions: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientChange = (index, e) => {
    const newIngredients = formData.ingredients.slice();
    newIngredients[index][e.target.name] = e.target.value;
    setFormData({
      ...formData,
      ingredients: newIngredients,
    });
  };

  const handleInstructionChange = (index, e) => {
    const newInstructions = formData.instructions.slice();
    newInstructions[index][e.target.name] = e.target.value;
    setFormData({
      ...formData,
      instructions: newInstructions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "http://localhost/Nutrition_AI/backend/public/index.php/create-recipe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data.message);
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="recipe"
        placeholder="Recipe"
        onChange={handleChange}
      />
      <input
        type="text"
        name="recipeHr"
        placeholder="Recipe HR"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={handleChange}
      />
      <input
        type="text"
        name="prepTime"
        placeholder="Prep Time"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cookTime"
        placeholder="Cook Time"
        onChange={handleChange}
      />
      <input
        type="text"
        name="readyTime"
        placeholder="Ready Time"
        onChange={handleChange}
      />
      <input
        type="number"
        name="servings"
        placeholder="Servings"
        onChange={handleChange}
      />
      <input
        type="number"
        name="categoryId"
        placeholder="Category ID"
        onChange={handleChange}
      />

      <h3>Ingredients</h3>
      {formData.ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="number"
            name="ingredientId"
            placeholder="Ingredient ID"
            onChange={(e) => handleIngredientChange(index, e)}
          />
          <input
            type="number"
            name="ingredientAmount"
            placeholder="Amount"
            onChange={(e) => handleIngredientChange(index, e)}
          />
          <input
            type="text"
            name="ingredientAmountUnit"
            placeholder="Unit"
            onChange={(e) => handleIngredientChange(index, e)}
          />
          <input
            type="number"
            name="ingredientAmountWeightG"
            placeholder="Weight (g)"
            onChange={(e) => handleIngredientChange(index, e)}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setFormData({
            ...formData,
            ingredients: [...formData.ingredients, {}],
          })
        }
      >
        Add Ingredient
      </button>

      <h3>Instructions</h3>
      {formData.instructions.map((instruction, index) => (
        <div key={index}>
          <input
            type="number"
            name="step"
            placeholder="Step"
            onChange={(e) => handleInstructionChange(index, e)}
          />
          <input
            type="text"
            name="instructionId"
            placeholder="Instruction"
            onChange={(e) => handleInstructionChange(index, e)}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setFormData({
            ...formData,
            instructions: [...formData.instructions, {}],
          })
        }
      >
        Add Instruction
      </button>

      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default CreateRecipe;
