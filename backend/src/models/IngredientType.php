<?php
require_once 'backend/src/config/Database.php';

class IngredientType {
  private $id;
  private $typeName;

  public function __construct($id, $typeName) {
    $this->id = $id;
    $this->typeName = $typeName;
  }
}