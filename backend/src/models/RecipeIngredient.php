<?php
require_once 'backend/src/config/Database.php';

class RecipeIngredient {
    private $id;
    private $ingredientId;
    private $recipeId;
    private $ingredientAmount;
    private $ingredientAmountUnit;
    private $ingredientAmountWeightG;

    public function __construct($ingredientId, $recipeId, $ingredientAmount, $ingredientAmountUnit, $ingredientAmountWeightG) {
        $this->ingredientId = $ingredientId;
        $this->recipeId = $recipeId;
        $this->ingredientAmount = $ingredientAmount;
        $this->ingredientAmountUnit = $ingredientAmountUnit;
        $this->ingredientAmountWeightG = $ingredientAmountWeightG;
    }

    public function save() {
        $db = Database::getInstance()->getConnection();
        $query = "INSERT INTO recipe_ingredient (ingredient_id, recipe_id, ingredient_amount, ingredient_amount_unit, ingredient_amount_weight_g)
                  VALUES (?, ?, ?, ?, ?)";
        
        $stmt = $db->prepare($query);
        $stmt->bind_param('iidsd', $this->ingredientId, $this->recipeId, $this->ingredientAmount, $this->ingredientAmountUnit, $this->ingredientAmountWeightG);
        $stmt->execute();
        $stmt->close();
    }
}
?>