<?php
require_once 'backend/src/config/Database.php';

function calculateWeightByCategory($recipeId, $categoryId) {
  $db = Database::getInstance()->getConnection();

  $query = "
        SELECT
            ri.ingredient_amount_weight_g, 
        FROM recipe_ingredient ris
        JOIN ingredient i ON ri.ingredient_id = i.id
        JOIN category_subcategory cs ON i.category_subcategory_id = cs.id
        WHERE ri.recipe_id = ? AND cs.ingredient_category_id = ?
    ";
    
  $stmt = $db->prepare($query);
  $stmt->bind_param('ii', $recipeId, $categoryId);
  $stmt->execute();
  $result = $stmt->get_result();

  $totalAmount = 0;
  while ($row = $result->fetch_assoc()) {
    $ingredientAmountWeightG = $row['ingredient_amount_weight_g'];
    $totalAmount += $ingredientAmountWeightG;
  }
    
  $stmt->close();

  return $totalAmount;
}

?>