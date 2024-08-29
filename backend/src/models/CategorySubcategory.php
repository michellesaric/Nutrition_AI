<?php
require_once 'backend/src/config/Database.php';

class CategorySubcategory {
  private $ingredientCategoryId;
  private $ingredientSubcategoryId;

  public function __construct( $ingredientCategoryId, $ingredientSubcategoryId) {
    $this->ingredientCategoryId = $ingredientCategoryId;
    $this->ingredientSubcategoryId = $ingredientSubcategoryId;
  }
  public function saveAndGetId() {
    $db = Database::getInstance()->getConnection();
    $query = "INSERT INTO category_subcategory (ingredient_category_id, ingredient_subcategory_id)
                VALUES (?, ?)";
      
    $stmt = $db->prepare($query);
    $stmt->bind_param('ii', $this->ingredientCategoryId, $this->ingredientSubcategoryId);
  
    $stmt->execute();
    $lastInsertedId = $stmt->insert_id;
    $stmt->close();
    
    return $lastInsertedId;
}

}