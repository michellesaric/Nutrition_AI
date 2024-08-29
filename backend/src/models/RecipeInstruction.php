<?php
require_once 'backend/src/config/Database.php';

class RecipeInstruction {
    private $id;
    private $step;
    private $instructionId;
    private $recipeId;

    public function __construct($step, $instructionId, $recipeId) {
        $this->step = $step;
        $this->instructionId = $instructionId;
        $this->recipeId = $recipeId;
    }

    public function save() {
        $db = Database::getInstance()->getConnection();
        $query = "INSERT INTO recipe_instruction (step, instruction_id, recipe_id)
                  VALUES (?, ?, ?)";
        
        $stmt = $db->prepare($query);
        $stmt->bind_param('iii', $this->step, $this->instructionId, $this->recipeId);
        $stmt->execute();
        $stmt->close();
    }
}
?>