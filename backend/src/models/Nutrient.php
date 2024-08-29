<?php
require_once 'backend/src/config/Database.php';

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
}