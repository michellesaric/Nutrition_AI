<?php
require_once '../config/database.php';

class Instruction {
  private $id;
  private $instruction;

  public function __construct($id, $instruction) {
    $this->id = $id;
    $this->instruction = $instruction;
  }

  public static function getAllInstructions() {
    $pdo = Database::connect();
    $stmt = $pdo->query('SELECT * FROM instruction');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}