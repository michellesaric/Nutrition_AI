<?php
require_once '../config/database.php';

class IngredientType {
  private $id;
  private $typeName;

  public function __construct($id, $typeName) {
    $this->id = $id;
    $this->typeName = $typeName;
  }

  public static function getAllIngredientTypes() {
    $pdo = Database::connect();
    $stmt = $pdo->query('SELECT * FROM ingredient_type');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}