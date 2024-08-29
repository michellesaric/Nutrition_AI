<?php
require_once 'backend/src/models/IngredientCategory.php';

// Set the content type to application/json
header('Content-Type: application/json');

try {
  $ingredientCategories = IngredientCategory::listAllIngredientCategories();
  $ingredientCategoriesArray = [];

  foreach ($ingredientCategories as $ingredientCategory) {
    $ingredientCategoriesArray[] = [
      'id' => $ingredientCategory->getId(),
      'category' => $ingredientCategory->getIngredientCategory()
    ];
  }

  echo json_encode([
    'status' => 'success',
    'data' => $ingredientCategoriesArray
  ]);
} catch (Exception $e) {
  echo json_encode([
    'status' => 'error',
    'message' => $e->getMessage()
  ]);
}
?>