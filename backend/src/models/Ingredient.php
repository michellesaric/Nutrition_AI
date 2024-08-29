<?php
require_once 'backend/src/config/Database.php';

class Ingredient {
  private $id;
  private $ingredient;
  private $categorySubcategoryId;
  private $ingredientTypeId;
  private $ingredientUsed;
  private $fdcId_FNDDS;
  private $fdcId_SR_Legacy;

  // Constructor
  public function __construct($ingredient, $categorySubcategoryId, $ingredientTypeId, $ingredientUsed, $fdcId_FNDDS, $fdcId_SR_Legacy, $id = null) {
    $this->id = $id;  // Assigning id if provided
    $this->ingredient = $ingredient;
    $this->categorySubcategoryId = $categorySubcategoryId;
    $this->ingredientTypeId = $ingredientTypeId;
    $this->ingredientUsed = $ingredientUsed;
    $this->fdcId_FNDDS = $fdcId_FNDDS;
    $this->fdcId_SR_Legacy = $fdcId_SR_Legacy;
  }

  public function save() {
    $db = Database::getInstance()->getConnection();
    $query = "INSERT INTO ingredient (ingredient, category_subcategory_id, ingredient_type_id, ingredient_used, fdcId_FNDDS, fdcId_SR_Legacy)
              VALUES (?, ?, ?, ?, ?, ?)";
    
    $stmt = $db->prepare($query);
    $stmt->bind_param('siisii', $this->ingredient, $this->categorySubcategoryId, $this->ingredientTypeId, $this->ingredientUsed, $this->fdcId_FNDDS, $this->fdcId_SR_Legacy);
    $stmt->execute();
    $stmt->close();
  }

  public static function listAllIngredients() {
    $db = Database::getInstance()->getConnection();
    
    $query = "SELECT * FROM ingredient";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();
  
    $ingredients = [];
    while ($row = $result->fetch_assoc()) {
      $ingredients[] = new Ingredient($row['ingredient'], $row['category_subcategory_id'], $row['ingredient_type_id'], $row['ingredient_used'], $row['fdcId_FNDDS'], $row['fdcId_SR_Legacy'], $row['id']);
    }
  
    $stmt->close();
    return $ingredients;
  }

  public static function listAllIngredientsByIngredient($searchString) {
    $db = Database::getInstance()->getConnection();
    $query = "SELECT * FROM ingredient WHERE ingredient LIKE ?";
    $stmt = $db->prepare($query);
    $searchString = '%' . $searchString . '%';
    $stmt->bind_param('s', $searchString);
    
    $stmt->execute();
    $result = $stmt->get_result();
  
    $ingredients = [];
    while ($row = $result->fetch_assoc()) {
      $ingredients[] = new Ingredient($row['ingredient'], $row['category_subcategory_id'], $row['ingredient_type_id'], $row['ingredient_used'], $row['fdcId_FNDDS'], $row['fdcId_SR_Legacy'], $row['id']);
    }
  
    $stmt->close();
    return $ingredients;
  }

  public function getId() {
    return $this->id;
  }

  public function getIngredient() {
    return $this->ingredient;
  }

  public function getCategorySubcategoryId() {
    return $this->categorySubcategoryId;
  }
}

  
