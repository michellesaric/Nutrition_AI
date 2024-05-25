<?php
require_once 'backend/src/config/Database.php';

function getNutrientValue($recipeId, $macronutrientId) {
    $db = Database::getInstance()->getConnection();
    
    $query = `
        SELECT
            rn.nutrient_value
        FROM recipe_nutrient rn
        WHERE rn.recipe_id = ? AND rn.nutrient_id = ?
    `;
    
    $stmt = $db->prepare($query);
    $stmt->bind_param('ii', $recipeId, $macronutrientId);
    $stmt->execute();
    $result = $stmt->get_result();

    $nutrientValue = 0;

    if ($row = $result->fetch_assoc()) {
        $nutrientValue = $row['nutrient_value'];
    }
    
    $stmt->close();

    return $nutrientValue;
}


function getEnergy($recipeId, $averageMeal100) {
  return getNutrientValue($recipeId, 29) / $averageMeal100;
}

function getSugar($recipeId, $averageMeal100) {
  return getNutrientValue($recipeId, 9) / $averageMeal100;
}

function getSaturatedFat($recipeId, $averageMeal100) {
  return getNutrientValue($recipeId, 2) / $averageMeal100;
}

function getSodium($recipeId, $averageMeal100) {
  return getNutrientValue($recipeId, 4) / $averageMeal100;
}

function getFibers($recipeId, $averageMeal100) {
  return getNutrientValue($recipeId, 7) / $averageMeal100;
}

function getProteins($recipeId, $averageMeal100) {
  return getNutrientValue($recipeId, 8) / $averageMeal100;
}
?>