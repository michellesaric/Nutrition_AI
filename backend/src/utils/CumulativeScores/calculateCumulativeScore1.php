<?php

require_once 'backend/src/config/Database.php';

function calculateCumulativeScore1() {
  $db = Database::getInstance()->getConnection();

  $maxNrf2Query = "SELECT MAX(nrf2) AS maximum_nrf2 FROM recipe";
  $maxNrf2Stmt = $db->prepare($maxNrf2Query);
  $maxNrf2Stmt->execute();
  $maxNrf2Result = $maxNrf2Stmt->get_result();
  $maximumNrf2 = $maxNrf2Result->fetch_assoc()['maximum_nrf2'];

  $query = "
    SELECT
      r.id,
      r.cumulative_score_1,
      r.nrf2,
      r.nutri_score,
      r.nutri_score_points
    FROM
      recipe r
  ";
  $stmt = $db->prepare($query);
  $stmt->execute();
  $result = $stmt->get_result();

  while ($row = $result->fetch_assoc()) {
    $id = $row['id'];
    $nrf2 = $row['nrf2'];
    $nutriScore = $row['nutri_score'];
    $nutriScorePoints = $row['nutri_score_points'];

    $nutriScoreScore = calculateNutriScoreScore($nutriScore, $nutriScorePoints);

    $cumulativeScore1 = (($nrf2 / $maximumNrf2) + $nutriScore + $nutriScoreScore) / 3;
    updateCumulativeScore1($cumulativeScore1, $id);
  }
}

function calculateNutriScoreScore($nutriScore, $nutriScorePoints) {
  if ($nutriScore == 1) {
    return 1;
  } elseif ($nutriScore == 2 || $nutriScore == 3) {
    return (1 - ($nutriScorePoints / 40));
  } else {
    return -($nutriScorePoints / 40);
  }
}

function updateCumulativeScore1($cumulativeScore1, $recipeId) {
  $db = Database::getInstance()->getConnection();
  $query = "UPDATE recipe SET cumulative_score_1 = ? WHERE id = ?";
  $stmt = $db->prepare($query);
  $stmt->bind_param('di', $cumulativeScore1, $recipeId);
  $stmt->execute();
  $stmt->close();
}
?>