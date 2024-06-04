<?php

require_once "backend/src/utils/getDailyValue.php";

function calculateFactor($array, $recipeId) {
  $factor = 0;
  foreach ($array as $element) {
    $dailyValue = getDailyValue($recipeId, $element);
    if($dailyValue > 1) {
      $dailyValue = 1;
    }
    $factor += $dailyValue;
  }

  return $factor *= 100;
}

?>