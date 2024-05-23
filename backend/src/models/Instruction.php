<?php
require_once '../config/database.php';

class Instruction {
  private $id;
  private $instruction;

  public function __construct($id, $instruction) {
    $this->id = $id;
    $this->instruction = $instruction;
  }
}