<?php
require_once 'backend/src/config/Database.php';

function calculateRecipeCalories($recipeId) {
    $db = Database::getInstance()->getConnection();
    
    $query = "
        SELECT
            ri.ingredient_amount_weight_g,
            inr.nutrient_value
        FROM recipe_ingredient ri
        JOIN ingredient_nutrient inr ON ri.ingredient_id = inr.ingredient_id
        WHERE ri.recipe_id = ? AND inr.nutrient_id = 29
    ";
    
    $stmt = $db->prepare($query);
    $stmt->bind_param('i', $recipeId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $totalCalories = 0;

    while ($row = $result->fetch_assoc()) {
        $ingredientAmountWeightG = $row['ingredient_amount_weight_g'];
        $nutrientValue = $row['nutrient_value'];

        $totalCalories += ($ingredientAmountWeightG / 100) * $nutrientValue;
    }
    
    $stmt->close();

    return $totalCalories;
}
?>