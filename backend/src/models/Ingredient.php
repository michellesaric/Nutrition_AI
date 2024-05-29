<?php
require_once 'backend/src/config/Database.php';

class Ingredient {
  private $id;
  private $ingredient;
  private $categorySubcategoryId;
  private $ingredientTypeId;
  private $ingredientUsed;
  private $fdcld_FNDDS;
  private $fdcld_SR_Legacy;

  public function __construct($id, $ingredient, $categorySubcategoryId, $ingredientTypeId, $ingredientUsed, $fdcld_FNDDS, $fdcld_SR_Legacy) {
    $this->id = $id;
    $this->ingredient = $ingredient;
    $this->categorySubcategoryId = $categorySubcategoryId;
    $this->ingredientTypeId = $ingredientTypeId;
    $this->ingredientUsed = $ingredientUsed;
    $this->fdcld_FNDDS = $fdcld_FNDDS;
    $this->fdcld_SR_Legacy = $fdcld_SR_Legacy;
  }

  public function save() {
    $db = Database::getInstance()->getConnection();
    $query = "INSERT INTO ingredient (ingredient, category_subcategory_id, ingredient_type_id, ingredient_used, fdcld_FNDDS, fdcld_SR_Legacy)
              VALUES (?, ?, ?, ?, ?)";
    
    $stmt = $db->prepare($query);
    $stmt->bind_param('siisii', $this->ingredient, $this->categorySubcategoryId, $this->ingredientTypeId, $this->ingredientUsed, $this->fdcld_FNDDS, $this->fdcld_SR_Legacy);
    $stmt->execute();
    $stmt->close();
  }
}

  
