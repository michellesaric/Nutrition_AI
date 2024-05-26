<?php
require_once 'backend/src/config/Database.php';

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