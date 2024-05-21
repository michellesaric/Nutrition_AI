<?php
require_once '../config/database.php';

class IngredientNutrient {
  private $id;
  private $nutrientValue;
  private $dailyValue;
  private $nutrientId;
  private $ingredientId;
  private $nutrientUnit;

  public function __construct($id, $nutrientValue, $dailyValue, $nutrientId, $ingredientId, $nutrientUnit) {
    $this->id = $id;
    $this->nutrientValue = $nutrientValue;
    $this->dailyValue = $dailyValue;
    $this->nutrientId = $nutrientId;
    $this->ingredientId = $ingredientId;
    $this->nutrientUnit = $nutrientUnit;
  }
}