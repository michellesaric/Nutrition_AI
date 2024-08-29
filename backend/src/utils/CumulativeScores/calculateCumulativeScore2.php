<?php

require_once 'backend/src/config/Database.php';

function calculateCumulativeScore2() {
  $db = Database::getInstance()->getConnection();

  $maxNrf2Query = "SELECT MAX(nrf2) AS maximum_nrf2 FROM recipe";
  $maxNrf2Stmt = $db->prepare($maxNrf2Query);
  $maxNrf2Stmt->execute();
  $maxNrf2Result = $maxNrf2Stmt->get_result();
  $maximumNrf2 = $maxNrf2Result->fetch_assoc()['maximum_nrf2'];

  $query = "
    SELECT
      r.id,
      r.carb_per,
      r.fat_per,
      r.protein_per,
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
    $carbPer = $row['carb_per'];
    $fatPer = $row['fat_per'];
    $proteinPer = $row['protein_per'];
    $nrf2 = $row['nrf2'];
    $nutriScore = $row['nutri_score'];
    $nutriScorePoints = $row['nutri_score_points'];

    $p_f1_rk = calculate_p_f1_rk($nrf2, $maximumNrf2);
    $p_f2_rk = calculate_p_f2_rk($carbPer);
    $p_f3_rk = calculate_p_f3_rk($fatPer);
    $p_f4_rk = calculate_p_f4_rk($proteinPer);
    $p_f5_rk = calculate_p_f5_rk($nutriScore, $nutriScorePoints);

    $cumulativeScore2 = $p_f1_rk * $p_f2_rk * $p_f3_rk * $p_f4_rk * $p_f5_rk;
    updateCumulativeScore2($cumulativeScore2, $id);
  }
}
function calculate_p_f1_rk($nrf2, $maximumNrf2) {
  if($nrf2 > 0) {
    return ($nrf2 / $maximumNrf2);
  } else {
    return 0;
  }
}

function calculate_p_f2_rk($carbPer) {
  if($carbPer < 45) {
    return ($carbPer / 45);
  } elseif($carbPer >= 45 && $carbPer <= 60) {
    return 1;
  } else {
    return ((100 - $carbPer) / 40);
  }
}

function calculate_p_f3_rk($fatPer) {
  if($fatPer < 20) {
    return ($fatPer / 20);
  } elseif($fatPer >= 20 && $fatPer <= 35) {
    return 1;
  } else {
    return ((100 - $fatPer) / 65);
  }
}

function calculate_p_f4_rk($proteinPer) {
  if($proteinPer < 10) {
    return ($proteinPer / 10);
  } elseif($proteinPer >= 10 && $proteinPer <= 35) {
    return 1;
  } else {
    return ((100 - $proteinPer) / 65);
  }
}

function calculate_p_f5_rk($nutriScore, $nutriScorePoints) {
  if($nutriScore == 1) {
    return 1;
  } else {
    return ((1 - $nutriScorePoints) / 40);
  }
}

function updateCumulativeScore2($cumulativeScore1, $recipeId) {
  $db = Database::getInstance()->getConnection();
  $query = "UPDATE recipe SET cumulative_score_1 = ? WHERE id = ?";
  $stmt = $db->prepare($query);
  $stmt->bind_param('di', $cumulativeScore1, $recipeId);
  $stmt->execute();
  $stmt->close();
}
?>