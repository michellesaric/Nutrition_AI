<?php
require_once '../config/database.php';

class IngredientContent {
  private $id;
  private $ingredientCategoryId;
  private $ingredientSubcategoryId;

  public function __construct($id, $ingredientCategoryId, $ingredientSubcategoryId) {
    $this->id = $id;
    $this->ingredientCategoryId = $ingredientCategoryId;
    $this->ingredientSubcategoryId = $ingredientSubcategoryId;
  }
}