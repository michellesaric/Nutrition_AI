<?php
require_once 'backend/src/models/Recipe.php';
require_once 'backend/src/models/RecipeIngredient.php';
require_once 'backend/src/models/RecipeInstruction.php';
require_once 'backend/src/models/RecipeNutrient.php';

class RecipeController {
  public function createRecipe() {
    $db = Database::getInstance()->getConnection();
    $db->autocommit(FALSE);

    try {
        error_log("Starting createRecipe");

        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Input data: " . json_encode($data));

        $recipe = $data['recipe'];
        $recipeHr = $data['recipeHr'];
        $description = $data['description'];
        $url = $data['url'];
        $author = $data['author'];
        $prepTime = $data['prepTime']; 
        $cookTime = $data['cookTime'];
        $readyTime = $data['readyTime']; 
        $servings = $data['servings'];
        $categoryId = $data['categoryId'];

        $ingredients = $data['ingredients'];
        $instructions = $data['instructions'];

        // Save initial recipe details and get recipe ID
        $newRecipe = new Recipe($recipe, $recipeHr, $description, $url, $author, $prepTime, $cookTime, $readyTime, $servings, $categoryId);
        $recipeId = $newRecipe->saveAndGetId();
        error_log("Recipe saved with ID: $recipeId");

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
            error_log("Ingredient saved: " . json_encode($ingredient));
        }

        // Add Instructions
        foreach ($instructions as $instruction) {
            $recipeInstruction = new RecipeInstruction(
                $instruction['step'],
                $instruction['instructionId'],
                $recipeId
            );
            $recipeInstruction->save();
            error_log("Instruction saved: " . json_encode($instruction));
        }

        // Calculate and save nutrient values
        RecipeNutrient::calculateAndSaveRecipeNutrients($recipeId);
        error_log("Nutrients calculated for Recipe ID: $recipeId");

        // Update recipe with calculated values and other attributes
        $newRecipe->updateCalculatedValues($recipeId);
        error_log("Recipe updated with calculated values: $recipeId");

        $db->commit();
        error_log("Transaction committed");

        echo json_encode(['status' => 'success', 'message' => 'Recipe created successfully']);
    } catch (Exception $e) {
        $db->rollback();
        error_log("Transaction rolled back");
        error_log("Error: " . $e->getMessage());

        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to create recipe']);
    }
  }
}
?>