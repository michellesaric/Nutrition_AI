<?php
require_once '../config/database.php';

class IngredientSubcategory {
  private $id;
  private $subcategory;

  public function __construct($id, $subcategory) {
    $this->id = $id;
    $this->subcategory = $subcategory;
  }

  public static function getAllSubcategories() {
    $pdo = Database::connect();
    $stmt = $pdo->query('SELECT * FROM ingredient_subcategory');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}