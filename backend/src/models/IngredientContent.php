<?php
require_once 'backend/src/config/Database.php';

class IngredientContent {
  private $id;
  private $content;

  public function __construct($id, $content) {
    $this->id = $id;
    $this->content = $content;
  }

  public static function listEveryIngredientContent() {
    $db = Database::getInstance()->getConnection();
    
    $query = "SELECT * FROM ingredient_content";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $result = $stmt->get_result();
  
    $ingredientContentList = [];
    while ($row = $result->fetch_assoc()) {
      $ingredientContentList[] = new IngredientContent($row['id'], $row['content']);
    }
  
    $stmt->close();
    return $ingredientContentList;
  }

  // Getters for the properties
  public function getId() {
    return $this->id;
  }

  public function getIngredientContent() {
    return $this->content;
  }
}