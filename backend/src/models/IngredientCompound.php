<?php
require_once '../config/database.php';

class IngredientCompound {
  private $id;
  private $compoundId;
  private $ingredientId;

  public function __construct($id, $compoundId, $ingredientId) {
    $this->id = $id;
    $this->compoundId = $compoundId;
    $this->ingredientId = $ingredientId;
  }
}