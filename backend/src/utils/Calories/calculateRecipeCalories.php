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
    if (!$stmt) {
        error_log("Prepare failed: " . $db->error);
        throw new Exception("Query preparation failed");
    }
    $stmt->bind_param('i', $recipeId);
    if (!$stmt->execute()) {
        error_log("Execute failed: " . $stmt->error);
        throw new Exception("Query execution failed");
    }
    $result = $stmt->get_result();
    if (!$result) {
        error_log("Getting result set failed: " . $stmt->error);
        throw new Exception("Getting result set failed");
    }

    $totalCalories = 0;
    $rowCount = 0;

    while ($row = $result->fetch_assoc()) {
        $rowCount++;
        $ingredientAmountWeightG = $row['ingredient_amount_weight_g'];
        $nutrientValue = $row['nutrient_value'];

        // Log the fetched values for debugging
        error_log("Fetched row: ingredient_amount_weight_g = $ingredientAmountWeightG, nutrient_value = $nutrientValue");

        // Check for null values
        if (is_null($ingredientAmountWeightG) || is_null($nutrientValue)) {
            error_log("Null value encountered: ingredient_amount_weight_g = $ingredientAmountWeightG, nutrient_value = $nutrientValue");
            continue;
        }

        // Perform the calculation
        $calories = ($ingredientAmountWeightG / 100) * $nutrientValue;
        error_log("Calculated calories for row: $calories");

        $totalCalories += $calories;
    }
    
    // Log the number of rows processed and the total calories
    error_log("Processed $rowCount rows");
    error_log("Total calories: $totalCalories");

    $stmt->close();

    return $totalCalories;
}
?>