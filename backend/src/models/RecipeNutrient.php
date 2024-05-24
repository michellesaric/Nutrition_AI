<?php
require_once '../config/database.php';

class RecipeNutrient {
  private $nutrientValue;
  private $dailyValue;
  private $nutrientId;
  private $recipeId;

  public function __construct($nutrientValue, $dailyValue, $nutrientId, $recipeId) {
    $this->nutrientValue = $nutrientValue;
    $this->dailyValue = $dailyValue;
    $this->nutrientId = $nutrientId;
    $this->recipeId = $recipeId;
  }

  public function save() {
    $db = Database::getInstance()->getConnection();
    $query = "INSERT INTO recipe_nutrient (nutrient_value, daily_value, recipe_id, nutrient_id)
              VALUES (?, ?, ?, ?)";

    $stmt = $db->prepare($query);
    $stmt->bind_param('ddii', $this->nutrientValue, $this->dailyValue, $this->recipeId, $this->nutrientId);

    $stmt->execute();
    $stmt->close();
  }

  public static function calculateAndSaveRecipeNutrients($recipeId) {
    $db = Database::getInstance()->getConnection();

    // Query to get all ingredients and their nutrient values for the given recipe
    $query = "
        SELECT
            ri.ingredient_amount_weight_g,
            inr.nutrient_id,
            inr.nutrient_value,
            inr.nutrient_unit,
            n.recommended_value
        FROM recipe_ingredient ri
        JOIN ingredient_nutrient inr ON ri.ingredient_id = inr.ingredient_id
        JOIN nutrient n ON inr.nutrient_id = n.id
        WHERE ri.recipe_id = ?
    ";

    $stmt = $db->prepare($query);
    $stmt->bind_param('i', $recipeId);
    $stmt->execute();
    $result = $stmt->get_result();

    $nutrients = [];

    // Calculate nutrient values for the recipe
    while ($row = $result->fetch_assoc()) {
      $nutrientId = $row['nutrient_id'];
      $ingredientAmountWeightG = $row['ingredient_amount_weight_g'];
      $nutrientValue = $row['nutrient_value'];
      $nutrientUnit = $row['nutrient_unit'];
      $recommendedValue = $row['recommended_value'];

      if (!isset($nutrients[$nutrientId])) {
        $nutrients[$nutrientId] = [
          'nutrient_value' => 0,
          'daily_value' => 0
          ];
      }

      // Adjust nutrient value based on unit
      if ($nutrientUnit == 'mg') {
        $nutrientValue /= 1000;
      } elseif ($nutrientUnit == 'Âµg') {
        $nutrientValue /= 1000000;
      }
      // 'g' and 'kcal' do not need adjustment

      $nutrients[$nutrientId]['nutrient_value'] += ($ingredientAmountWeightG * $nutrientValue) / 100;
    }

    $stmt->close();

    // Calculate daily values and save calculated nutrient values into RecipeNutrient table
    foreach ($nutrients as $nutrientId => $values) {
      $nutrientValue = $values['nutrient_value'];
      // Fetch the recommended value for the nutrient
      $query = "SELECT recommended_value FROM nutrient WHERE id = ?";
      $stmt = $db->prepare($query);
      $stmt->bind_param('i', $nutrientId);
      $stmt->execute();
      $stmt->bind_result($recommendedValue);
      $stmt->fetch();
      $stmt->close();

      // Calculate daily value based on recommended value
      $dailyValue = $nutrientValue / $recommendedValue;

      $recipeNutrient = new RecipeNutrient($recipeId, $nutrientId, $nutrientValue, $dailyValue);
      $recipeNutrient->save();
    }
  }
}