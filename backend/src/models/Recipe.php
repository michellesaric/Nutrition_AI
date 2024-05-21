<?php
require_once '../config/database.php';

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
  


  public function __construct($id, $recipe, $recipeHr, $description, $rating, $adjustedRating, $score, $author, $reviews, $prepTime, $cookTime, $readyTime, $calories, $servings, $nr, $lim3, $nrf, $nr2, $lim32, $nrf2, $nr3, $lim33, $nrf3, $carbPer, $fatPer, $proteinPer, $totalPer, $cumulativeScore1, $cumulativeScore2, $nutriScorePoints, $nutriScore, $instructionsStepsTotal, $categoryId) {
    $this->id = $id;
    $this->recipe = $recipe;
    $this->recipeHr = $recipeHr;
    $this->description = $description;
    $this->rating = $rating;
    $this->adjustedRating = $adjustedRating;
    $this->score = $score;
    $this->author = $author;
    $this->reviews = $reviews;
    $this->prepTime = $prepTime;
    $this->cookTime = $cookTime;
    $this->readyTime = $readyTime;
    $this->calories = $calories;
    $this->servings = $servings;
    $this->nr = $nr;
    $this->lim3 = $lim3;
    $this->nrf = $nrf;
    $this->nr2 = $nr2;
    $this->lim32 = $lim32;
    $this->nrf2 = $nrf2;
    $this->nr3 = $nr3;
    $this->lim33 = $lim33;
    $this->nrf3 = $nrf3;
    $this->carbPer = $carbPer;
    $this->fatPer = $fatPer;
    $this->proteinPer = $proteinPer;
    $this->totalPer = $totalPer;
    $this->cumulativeScore1 = $cumulativeScore1;
    $this->cumulativeScore2 = $cumulativeScore2;
    $this->nutriScorePoints = $nutriScorePoints;
    $this->nutriScore = $nutriScore;
    $this->instructionsStepsTotal = $instructionsStepsTotal;
    $this->categoryId = $categoryId;
  }
}