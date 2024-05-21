<?php
require_once '../config/database.php';

class Nutrient {
  private $id;
  private $nutrient;
  private $recommendedValue;
  private $measure;
  private $fdcNutrientId;

  public function __construct($id, $nutrient, $recommendedValue, $measure, $fdcNutrientId) {
    $this->id = $id;
    $this->nutrient = $nutrient;
    $this->recommendedValue = $recommendedValue;
    $this->measure = $measure;
    $this->fdcNutrientId = $fdcNutrientId;
  }

  public static function getAllNutrients() {
    $pdo = Database::connect();
    $stmt = $pdo->query('SELECT * FROM nutrient');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}