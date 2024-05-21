<?php
require_once '../config/database.php';

class RecipeInstruction {
  private $id;
  private $step;
  private $instructionId;
  private $recipeId;

  public function __construct($id, $step, $instructionId, $recipeId) {
    $this->id = $id;
    $this->step = $step;
    $this->instructionId = $instructionId;
    $this->recipeId = $recipeId;
  }
}