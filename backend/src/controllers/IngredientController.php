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
    $fdcld_FNNDS = $data['fdcld_FNDDS'];
    $fdcld_SR_Legacy = $data['fdcld_SR_Legacy'];


    echo json_encode(['status' => 'success', 'message' => 'Recipe created successfully']);
  }
}
?>