<?php
require_once 'backend/src/config/Database.php';

class Compound {
  private $id;
  private $compound;
  private $effect;

  public function __construct($id, $compound, $effect) {
    $this->id = $id;
    $this->compound = $compound;
    $this->effect = $effect;
  }
}