<?php
require_once 'backend/src/models/Category.php';

// Set the content type to application/json
header('Content-Type: application/json');

try {
  $categories = Category::listAllCategories();
  $categoriesArray = [];

  foreach ($categories as $category) {
    $categoriesArray[] = [
      'id' => $category->getId(),
      'category' => $category->getCategory()
    ];
  }

  echo json_encode([
    'status' => 'success',
    'data' => $categoriesArray
  ]);
} catch (Exception $e) {
  echo json_encode([
    'status' => 'error',
    'message' => $e->getMessage()
  ]);
}
?>