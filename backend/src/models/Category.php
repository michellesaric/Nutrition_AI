<?php
require_once '../config/database.php';

class Category {
  private $id;
  private $category;

  public function __construct($id, $category) {
    $this->id = $id;
    $this->category = $category;
  }

  public static function getAllCategories() {
    $pdo = Database::connect();
    $stmt = $pdo->query('SELECT * FROM category');
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}