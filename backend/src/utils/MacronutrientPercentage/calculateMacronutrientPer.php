<?php
require_once 'backend/src/config/Database.php';

function calculateMacronutrientPer($recipeId, $calories, $macronutrientId, $macronutrientUnit) {
    $db = Database::getInstance()->getConnection();
    
    $query = "
        SELECT
            nutrient_value
        FROM recipe_nutrient
        WHERE recipe_id = ? AND nutrient_id = ?
    ";
    
    $stmt = $db->prepare($query);
    if (!$stmt) {
        error_log("Prepare failed: " . $db->error);
        throw new Exception("Query preparation failed");
    }
    $stmt->bind_param('ii', $recipeId, $macronutrientId);
    if (!$stmt->execute()) {
        error_log("Execute failed: " . $stmt->error);
        throw new Exception("Query execution failed");
    }
    $stmt->execute();
    $result = $stmt->get_result();
    if (!$result) {
        error_log("Getting result set failed: " . $stmt->error);
        throw new Exception("Getting result set failed");
    }
    
    $macronutrientPer = 0;

    if ($row = $result->fetch_assoc()) {
        $nutrientValue = $row['nutrient_value'];
        $macronutrientPer = ($nutrientValue * $macronutrientUnit * 100) / $calories; 
    }
    
    $stmt->close();

    return $macronutrientPer;
}
?>