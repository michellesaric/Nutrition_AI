<?php
require_once '../config/Database.php';

function calculateMacronutrientPer($recipeId, $calories, $macronutrientId, $macronutrientUnit) {
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
    
    $carbPer = 0;

    if ($row = $result->fetch_assoc()) {
        $nutrientValue = $row['nutrient_value'];
        $carbPer = ($nutrientValue * $macronutrientUnit * 100) / $calories; 
    }
    
    $stmt->close();

    return $carbPer;
}
?>