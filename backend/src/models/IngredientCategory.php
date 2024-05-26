<?php
require_once '../config/database.php';

class IngredientCategory {
  private $id;
  private $category;

  public function __construct($id, $category) {
    $this->id = $id;
    $this->category = $category;
  }

  public static function listAllIngredientCategories() {
    $db = Database::getInstance()->getConnection();
    
    $query = "SELECT * FROM ingredient_category";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();
  
    $ingredientCategories = [];
    while ($row = $result->fetch_assoc()) {
      $ingredientCategories[] = new IngredientCategory($row['id'], $row['category']);
    }
  
    $stmt->close();
    return $ingredientCategories;
  }

  // Getters for the properties
  public function getId() {
    return $this->id;
  }

  public function getIngredientCategory() {
    return $this->category;
  }

}