<?php
require_once 'backend/src/config/Database.php';

class CategorySubcategory {
  private $id;
  private $ingredientCategoryId;
  private $ingredientSubcategoryId;

  public function __construct($id, $ingredientCategoryId, $ingredientSubcategoryId) {
    $this->id = $id;
    $this->ingredientCategoryId = $ingredientCategoryId;
    $this->ingredientSubcategoryId = $ingredientSubcategoryId;
  }
}