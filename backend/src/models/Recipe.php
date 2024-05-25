<?php
require_once 'backend/src/config/Database.php';
require_once 'backend/src/utils/Calories/calculateRecipeCalories.php';
require_once 'backend/src/utils/MacronutrientPercentage/calculateMacronutrientPer.php';
require_once 'backend/src/utils/NutriScore/calculateNutriPoints.php';
require_once 'backend/src/utils/NutricionisticParameters/calculateNR_LIM3_NRF.php';
require_once 'backend/src/utils/NutricionisticParameters/calculateNR3_LIM33_NRF3.php';
require_once 'backend/src/utils/CumulativeScores/calculateCumulativeScore1.php';
require_once 'backend/src/utils/CumulativeScores/calculateCumulativeScore2.php';

class Recipe {
  private $id;
  private $recipe;
  private $recipeHr;
  private $description;
  private $rating;
  private $adjustedRating;
  private $score;
  private $author;
  private $reviews;
  private $prepTime;
  private $cookTime;
  private $readyTime;
  private $calories;
  private $servings;
  private $nr;
  private $lim3;
  private $nrf;
  private $nr2;
  private $lim32;
  private $nrf2;
  private $nr3;
  private $lim33;
  private $nrf3;
  private $carbPer;
  private $fatPer;
  private $proteinPer;
  private $totalPer;
  private $cumulativeScore1;
  private $cumulativeScore2;
  private $nutriScorePoints;
  private $nutriScore;
  private $instructionsStepsTotal;
  private $categoryId;

  public function __construct($recipe, $recipeHr, $description, $author, $prepTime, $cookTime, $readyTime, $servings, $categoryId) {
    $this->recipe = $recipe;
    $this->recipeHr = $recipeHr;
    $this->description = $description;
    $this->author = $author;
    $this->prepTime = $prepTime;
    $this->cookTime = $cookTime;
    $this->readyTime = $readyTime;
    $this->servings = $servings;
    $this->categoryId = $categoryId;
  }

  public function saveAndGetId() {
    $db = Database::getInstance()->getConnection();
    $query = "INSERT INTO recipes (recipe, recipeHr, description, author, prepTime, cookTime, readyTime, servings, categoryId, rating, adjustedRating, score, reviews, calories, instructionsStepsTotal, nr, lim3, nrf, nr2, lim32, nrf2, nr3, lim33, nrf3, carbPer, fatPer, proteinPer, totalPer, cumulativeScore1, cumulativeScore2, nutriScorePoints, nutriScore)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)";
      
    $stmt = $db->prepare($query);
    $stmt->bind_param('sssiiiii', $this->recipe, $this->recipeHr, $this->description, $this->author, $this->prepTime, $this->cookTime, $this->readyTime, $this->servings, $this->categoryId);
  
    $stmt->execute();
    $lastInsertedId = $stmt->insert_id;
    $stmt->close();
    
    return $lastInsertedId;
}

  public function updateCalculatedValues($recipeId) {
    $this->calories = calculateRecipeCalories($recipeId);
    $this->carbPer = calculateMacronutrientPer($recipeId, $this->calories, 6, 4);
    $this->fatPer = calculateMacronutrientPer($recipeId, $this->calories, 1, 9);
    $this->proteinPer = calculateMacronutrientPer($recipeId, $this->calories, 8, 4);
    $this->totalPer = $this->carbPer + $this->fatPer + $this->proteinPer;
    $this->nr = calculateNR_LIM3_NRF($recipeId)[0];
    $this->lim3 = calculateNR_LIM3_NRF($recipeId)[1];
    $this->nrf = calculateNR_LIM3_NRF($recipeId)[2];
    $this->nr2 = ($this->nr * 100) / $this->calories;
    $this->lim32 = ($this->lim3 * 100) / $this->calories;
    $this->nrf2 = ($this->nrf * 100) / $this->calories;
    $this->nr3 = calculateNR3_LIM33_NRF3($recipeId)[0];
    $this->lim33 = calculateNR3_LIM33_NRF3($recipeId)[1];
    $this->nrf3 = calculateNR3_LIM33_NRF3($recipeId)[2];
    $this->nutriScorePoints = calculateNutriPoints($recipeId)[0];
    $this->nutriScore = calculateNutriPoints($recipeId)[1];

    $this->updateRecipe($recipeId);
    calculateCumulativeScore1();
    calculateCumulativeScore2();
  }

  public function updateRecipe($recipeId) {
    $db = Database::getInstance()->getConnection();
    $query = "UPDATE recipes SET rating = ?, adjustedRating = ?, score = ? , reviews = ?, calories = ?, carbPer = ?, fatPer = ?, proteinPer = ?, totalPer = ?, nr = ?, lim3 = ?, nrf = ?, nr2 = ?, lim32 = ?, nrf2 = ?, nr3 = ?, lim33 = ?, nrf3 = ?, nutriScorePoints = ?, nutriScore = ? WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->bind_param('iiiii', $this->rating, $this->adjustedRating, $this->score, $this->reviews, $this->calories, $this->carbPer, $this->fatPer, $this->proteinPer, $this->totalPer, $this->nr, $this->lim3, $this->nrf, $this->nr2, $this->lim32, $this->nrf2, $this->nr3, $this->lim33, $this->nrf3, $this->nutriScorePoints, $this->nutriScore, $recipeId);
    $stmt->execute();
    $stmt->close();
  }
}
?>