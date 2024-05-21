<?php
require_once '../config/database.php';

class RecipeNutrient {
  private $id;
  private $nutrientValue;
  private $dailyValue;
  private $nutrientId;
  private $recipeId;

  public function __construct($id, $nutrientValue, $dailyValue, $nutrientId, $recipeId) {
    $this->id = $id;
    $this->nutrientValue = $nutrientValue;
    $this->dailyValue = $dailyValue;
    $this->nutrientId = $nutrientId;
    $this->recipeId = $recipeId;
  }
}