<?php
require_once 'backend/src/config/Database.php';

function getDailyValue($recipeId, $macronutrientId) {
    $db = Database::getInstance()->getConnection();
    
    $query = "
        SELECT
            daily_value
        FROM recipe_nutrient 
        WHERE recipe_id = ? AND nutrient_id = ?
    ";
    
    $stmt = $db->prepare($query);
    $stmt->bind_param('ii', $recipeId, $macronutrientId);
    $stmt->execute();
    $result = $stmt->get_result();

    $dailyValue = 0;

    if ($row = $result->fetch_assoc()) {
        $dailyValue = $row['daily_value'];
    }
    
    $stmt->close();

    return $dailyValue;
}
?>