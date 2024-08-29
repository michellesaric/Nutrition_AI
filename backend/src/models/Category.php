<?php
require_once 'backend/src/config/database.php';

class Category {
  private $id;
  private $category;

  public function __construct($id, $category) {
    $this->id = $id;
    $this->category = $category;
  }

  // Static method to list all categories
  public static function listAllCategories() {
    $db = Database::getInstance()->getConnection();
    
    $query = "SELECT * FROM category";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();
  
    $categories = [];
    while ($row = $result->fetch_assoc()) {
      $categories[] = new Category($row['id'], $row['category']);
    }
  
    $stmt->close();
    return $categories;
  }

  // Getters for the properties
  public function getId() {
    return $this->id;
  }

  public function getCategory() {
    return $this->category;
  }
}
?>