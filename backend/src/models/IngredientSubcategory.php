<?php
require_once 'backend/src/config/Database.php';

class IngredientSubcategory {
  private $id;
  private $subcategory;

  public function __construct($id, $subcategory) {
    $this->id = $id;
    $this->subcategory = $subcategory;
  }
}