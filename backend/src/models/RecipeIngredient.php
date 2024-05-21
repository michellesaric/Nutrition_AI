<?php
require_once '../config/database.php';

class RecipeIngredient {
  private $id;
  private $ingredientId;
  private $recipeId;
  private $ingredientAmount;
  private $ingredientAmountUnit;
  private $ingredientAmountWeightG;

  public function __construct($id, $ingredientId, $recipeId, $ingredientAmount, $ingredientAmountUnit, $ingredientAmountWeightG) {
    $this->id = $id;
    $this->ingredientId = $ingredientId;
    $this->recipeId = $recipeId;
    $this->ingredientAmount = $ingredientAmount;
    $this->ingredientAmountUnit = $ingredientAmountUnit;
    $this->ingredientAmountWeightG = $ingredientAmountWeightG;
  }
}