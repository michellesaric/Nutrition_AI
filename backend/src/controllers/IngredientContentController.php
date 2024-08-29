<?php
require_once 'backend/src/models/IngredientContent.php';

// Set the content type to application/json
header('Content-Type: application/json');

try {
  $ingredientContentList = IngredientContent::listEveryIngredientContent();
  $ingredientContentArray = [];

  foreach ($ingredientContentList as $ingredientContent) {
    $ingredientContentArray[] = [
      'id' => $ingredientContent->getId(),
      'content' => $ingredientContent->getIngredientContent()
    ];
  }

  echo json_encode([
    'status' => 'success',
    'data' => $ingredientContentArray
  ]);
} catch (Exception $e) {
  echo json_encode([
    'status' => 'error',
    'message' => $e->getMessage()
  ]);
}
?>