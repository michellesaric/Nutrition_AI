<?php
require_once '../config/database.php';

class IngredientSubcategory {
  private $id;
  private $subcategory;

  public function __construct($id, $subcategory) {
    $this->id = $id;
    $this->subcategory = $subcategory;
  }
}