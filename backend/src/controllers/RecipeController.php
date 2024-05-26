<?php
require_once 'backend/src/models/Recipe.php';
require_once 'backend/src/models/RecipeIngredient.php';
require_once 'backend/src/models/RecipeInstruction.php';
require_once 'backend/src/models/RecipeNutrient.php';

class RecipeController {
  public function createRecipe() {
    $data = json_decode(file_get_contents('php://input'), true);

    $recipe = $data['recipe'];
    $recipeHr = $data['recipeHr'];
    $description = $data['description'];
    $author = $data['author'];
    $prepTime = $data['prepTime']; // possibly null
    $cookTime = $data['cookTime']; // possibly null
    $readyTime = $data['readyTime']; // possibly null
    $servings = $data['servings'];
    $categoryId = $data['categoryId'];

    $ingredients = $data['ingredients'];
    $instructions = $data['instructions'];

    // Save initial recipe details and get recipe ID
    $newRecipe = new Recipe($recipe, $recipeHr, $description, $author, $prepTime, $cookTime, $readyTime, $servings, $categoryId);
    $recipeId = $newRecipe->saveAndGetId();

    // Add Ingredients
    foreach ($ingredients as $ingredient) {
      $recipeIngredient = new RecipeIngredient(
        $ingredient['ingredientId'],
        $recipeId,
        $ingredient['ingredientAmount'],
        $ingredient['ingredientAmountUnit'],
        $ingredient['ingredientAmountWeightG']
      );
      $recipeIngredient->save();
    }

    // Add Instructions
    foreach ($instructions as $instruction) {
      $recipeInstruction = new RecipeInstruction(
        $instruction['step'],
        $instruction['instructionId'],
        $recipeId
      );
      $recipeInstruction->save();
    }

    // Calculate and save nutrient values
    RecipeNutrient::calculateAndSaveRecipeNutrients($recipeId);

    // Update recipe with calculated values and other attributes
    $newRecipe->updateCalculatedValues($recipeId);

    echo json_encode(['status' => 'success', 'message' => 'Recipe created successfully']);
  }
}
?>