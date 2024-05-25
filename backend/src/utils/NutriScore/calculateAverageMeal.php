<?php
require_once 'backend/src/config/Database.php';

function calculateAverageMeal($recipeId) {
  $db = Database::getInstance()->getConnection();
    
  $query = `
    SELECT
         rn.ingredient_amount_weight_g
    FROM recipe_ingredient rn
    WHERE rn.recipe_id = ?
  `;
    
  $stmt = $db->prepare($query);
  $stmt->bind_param('i', $recipeId);
  $stmt->execute();
  $result = $stmt->get_result();

  $averageMeal100 = 0;

  if ($row = $result->fetch_assoc()) {
    $ingredientAmountWeightG = $row['ingredient_amount_weight_g'];
    $averageMeal100 += $ingredientAmountWeightG;
  }

  $averageMeal100 /= 100;
    
  $stmt->close();

  return $averageMeal100;
}

?>