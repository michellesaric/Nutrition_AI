<?php
require_once '../config/Database.php';
require_once '../utils/calculateRecipeCalories.php';
require_once '../utils/calculateMacronutrientPer.php';
require_once '../utils/calculateNutriPoints.php';
require_once '../utils/calculateNR_LIM3_NRF.php';
require_once '../utils/calculateNR3_LIM33_NRF3.php';

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
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      
    $stmt = $db->prepare($query);
    $stmt->bind_param('sssiiiiiiddddiiiiiiiiiiiiiiii', $this->recipe, $this->recipeHr, $this->description, $this->author, $this->prepTime, $this->cookTime, $this->readyTime, $this->servings, $this->categoryId, $this->rating, $this->adjustedRating, $this->score, $this->reviews, $this->calories, $this->instructionsStepsTotal, $this->nr, $this->lim3, $this->nrf, $this->nr2, $this->lim32, $this->nrf2, $this->nr3, $this->lim33, $this->nrf3, $this->carbPer, $this->fatPer, $this->proteinPer, $this->totalPer, $this->cumulativeScore1, $this->cumulativeScore2, $this->nutriScorePoints, $this->nutriScore);
  
    $stmt->execute();
    $lastInsertedId = $stmt->insert_id;
    $stmt->close();

    $this->rating = null;
    $this->adjustedRating = null;
    $this->score = null;
    $this->reviews = null;
    $this->calories = calculateRecipeCalories($lastInsertedId);
    $this->carbPer = calculateMacronutrientPer($lastInsertedId, $this->calories, 6, 4);
    $this->fatPer = calculateMacronutrientPer($lastInsertedId, $this->calories, 1, 9);
    $this->proteinPer = calculateMacronutrientPer($lastInsertedId, $this->calories, 8, 4);
    $this->totalPer = $this->carbPer + $this->fatPer + $this->proteinPer;
    $this->nr = calculateNR_LIM3_NRF($lastInsertedId)[0];
    $this->lim3 = calculateNR_LIM3_NRF($lastInsertedId)[1];
    $this->nrf = calculateNR_LIM3_NRF($lastInsertedId)[2];
    $this->nr2 = ($this->nr * 100) / $this->calories;
    $this->lim32 = ($this->lim3 * 100) / $this->calories;
    $this->nrf2 = ($this->nrf * 100) / $this->calories;
    $this->nr3 = calculateNR3_LIM33_NRF3($lastInsertedId)[0];
    $this->lim33 = calculateNR3_LIM33_NRF3($lastInsertedId)[1];
    $this->nrf3 = calculateNR3_LIM33_NRF3($lastInsertedId)[2];
    $this->nutriScorePoints = calculateNutriScore($lastInsertedId)[0];
    $this->nutriScore = calculateNutriScore($lastInsertedId)[1];

    $this->updateRecipe($lastInsertedId, $this->rating, $this->adjustedRating, $this->score, $this->reviews, $this->calories, $this->carbPer, $this->fatPer, $this->proteinPer, $this->totalPer, $this->nr, $this->lim3, $this->nrf, $this->nr2, $this->lim32, $this->nrf2, $this->nr3, $this->lim33, $this->nrf3, $this->nutriScorePoints, $this->nutriScore);
    
    return $lastInsertedId;
  }

  public function updateRecipe($recipeId, $rating, $adjustedRating, $score, $reviews, $calories, $carbPer, $fatPer, $proteinPer , $totalPer, $nr, $lim3, $nrf, $nr2, $lim32, $nrf2, $nr3, $lim33, $nrf3, $nutriScorePoints, $nutriScore) {
    $db = Database::getInstance()->getConnection();
    $query = "UPDATE recipe SET rating = ?, adjusted_rating = ?, score = ? , reviews = ?, calories = ?, carb_per = ?, fat_per = ?, protein_per = ?, total_per = ?, nr = ?, lim3 = ?, nrf = ?, nr2 = ?, lim32 = ?, nrf2 = ?, nr3 = ?, lim33 = ?, nrf3 = ?, nutri_score_points = ?, nutri_score = ? WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->bind_param('dddddiii', $rating, $adjustedRating, $score, $reviews,$calories, $carbPer, $fatPer, $proteinPer, $totalPer, $nr, $lim3, $nrf, $nr2, $lim32, $nrf2, $nr3, $lim33, $nrf3, $nutriScorePoints, $nutriScore, $recipeId);
    $stmt->execute();
    $stmt->close();
  }
}
?>