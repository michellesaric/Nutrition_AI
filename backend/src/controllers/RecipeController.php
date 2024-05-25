<?php
require_once '../models/Recipe.php';
require_once '../models/RecipeIngredient.php';
require_once '../models/RecipeInstruction.php';

class RecipeController {
  public function createRecipe() {
    $data = json_decode(file_get_contents('php://input'), true);

    $recipe = $data['recipe'];
    $recipeHr = $data['recipeHr'];
    $description = $data['description'];
    $author = $data['author'];
    $prepTime = $data['prepTime']; // mozda prazno, enable null
    $cookTime = $data['cookTime']; // mozda prazno, enable null
    $readyTime = $data['readyTime']; // mozda prazno, enable null
    $servings = $data['servings'];
    $categoryId = $data['categoryId']; // pronac category
    $rating = $data['rating']; 
    $reviews = $data['reviews'];
    $calories = $data['calories'];
    $instructionsStepsTotal = $data['instructionsStepsTotal'];

    $ingredients = $data['ingredients'];
    $instructions = $data['instructions'];

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

    RecipeNutrient::calculateAndSaveRecipeNutrients($recipeId);

    echo json_encode(['status' => 'success', 'message' => 'Recipe created successfully']);
  }
}
?>