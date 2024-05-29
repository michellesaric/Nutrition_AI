<?php
require_once 'backend/src/models/Ingredient.php';
require_once 'backend/src/models/CategorySubcategory.php';

class IngredientController {
  public function createIngredient() {
    $data = json_decode(file_get_contents('php://input'), true);

    $ingredient = $data['ingredient'];
    $ingredientCategoryId = $data['ingredientCategoryId'];
    $ingredientSubcategoryId = $data['ingredientSubcategoryId'];
    $newCategorySubcatgory = new CategorySubcategory($ingredientCategoryId, $ingredientSubcategoryId);
    $categorySubcategoryId = $newCategorySubcatgory->saveAndGetId();
    $ingredientTypeId = $data['ingredientTypeId'];
    $ingredientUsed = null;
    $fdcId_FNDDS = $data['fdcId_FNDDS'];
    $fdcId_SR_Legacy = $data['fdcId_SR_Legacy'];

    $newIngredient = new Ingredient($ingredient, $categorySubcategoryId, $ingredientTypeId, $ingredientUsed, $fdcId_FNDDS, $fdcId_SR_Legacy);
    $newIngredient->save();

    echo json_encode(['status' => 'success', 'message' => 'Ingredient created successfully']);
  }

  public function getAllIngredientsBySearch($searchString) {
    header('Content-Type: application/json');

    try {
      $ingredients = Ingredient::listAllIngredientsByIngredient($searchString);
      $ingredientsArray = [];

      foreach ($ingredients as $ingredient) {
        $ingredientsArray[] = [
          'id' => $ingredient->getId(),
          'ingredient' => $ingredient->getIngredient(),
          'category_subcategory_id' => $ingredient->getCategorySubcategoryId()
        ];
      }

      echo json_encode([
        'status' => 'success',
        'data' => $ingredientsArray
      ]);
    } catch (Exception $e) {
      echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
      ]);
    }
  }

  public function getAllIngredients() {
    header('Content-Type: application/json');

    try {
      $ingredients = Ingredient::listAllIngredients();
      $ingredientsArray = [];

      foreach ($ingredients as $ingredient) {
        $ingredientsArray[] = [
          'id' => $ingredient->getId(),
          'ingredient' => $ingredient->getIngredient()
        ];
      }

      echo json_encode([
        'status' => 'success',
        'data' => $ingredientsArray
      ]);
    } catch (Exception $e) {
      echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
      ]);
    }
  }
}
?>