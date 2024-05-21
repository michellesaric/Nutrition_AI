<?php
require_once '../config/database.php';

class IngredientCategory {
  private $id;
  private $category;

  public function __construct($id, $category) {
    $this->id = $id;
    $this->category = $category;
  }

  public static function getAllIngredientCategories() {
    $pdo = Database::connect();
    $stmt = $pdo->query('SELECT * FROM ingredient_category');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}