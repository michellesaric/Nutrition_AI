<?php
require_once 'backend/src/config/Database.php';

function calculateInstructionSteps($recipeId) {
  $db = Database::getInstance()->getConnection();
  
  $query = "
    SELECT
      ri.id
    FROM
      recipe_instruction ri
    WHERE
      ri.recipe_id = ?
  ";
  
  $stmt = $db->prepare($query);
  $stmt->bind_param('i', $recipeId);
  $stmt->execute();
  $stmt->store_result(); 
  $count = $stmt->num_rows;
  
  return $count;
}
?>