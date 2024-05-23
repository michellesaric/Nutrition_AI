<?php
require_once '../config/Database.php';
require_once '../helpers/calculation_helper.php';

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

  public function calculateAndSetProperties($rating, $reviews, $calories, $instructionsStepsTotal) {
    $this->rating = $rating;
    $this->reviews = $reviews;
    $this->calories = $calories;
    $this->instructionsStepsTotal = $instructionsStepsTotal;

    $this->adjustedRating = 0;
    $this->score = 0;
    $this->nr = 0;
    $this->lim3 = 0;
    $this->nrf = 0;
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
      
    return $lastInsertedId;
  }
}
?>