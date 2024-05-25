<?php
require_once '../config/Database.php';

function getFruitVeg($recipeId, $averageMeal100) {
  $db = Database::getInstance()->getConnection();
    
  $query = "
        SELECT
            ri.ingredient_amount_weight_g,
            cs.ingredient_category_id, 
        FROM recipe_ingredient ri
        JOIN ingredient i ON ri.ingredient_id = i.id
        JOIN category_subcategory cs ON i.category_subcategory_id = cs.id
        WHERE ri.recipe_id = ?
    ";
    
  $stmt = $db->prepare($query);
  $stmt->bind_param('i', $recipeId);
  $stmt->execute();
  $result = $stmt->get_result();

  $fruitVeg = 0;
  while ($row = $result->fetch_assoc()) {
    $ingredientAmountWeightG = $row['ingredient_amount_weight_g'];
    $ingredientCategoryId = $row['ingredient_category_id'];

    $validCategoryIds = [3, 4, 5, 7, 23];

    if (in_array($ingredientCategoryId, $validCategoryIds)) {
      if(!$ingredientAmountWeightG) {
        $ingredientAmountWeightG = 0;
      }
      $fruitVeg += $ingredientAmountWeightG;
    }
  }
  $fruitVeg /= $averageMeal100 * 100;
    
  $stmt->close();

  return $fruitVeg;
}

?>