<?php
require_once '../config/database.php';

class IngredientType {
  private $id;
  private $typeName;

  public function __construct($id, $typeName) {
    $this->id = $id;
    $this->typeName = $typeName;
  }
}