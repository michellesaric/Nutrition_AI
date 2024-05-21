<?php
require_once '../config/database.php';

class IngredientList {
  private $id;
  private $ingredientContentId;
  private $recipeId;

  public function __construct($id, $ingredientContentId, $recipeId) {
    $this->id = $id;
    $this->ingredientContentId = $ingredientContentId;
    $this->recipeId = $recipeId;
  }
}