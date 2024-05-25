<?php 

require_once './getDailyValue.php';

function calculateNR_LIM3_NRF($recipeId) {

  $nrIds = [5, 7, 8, 10, 11, 12, 13, 17, 19];
  $lim3Ids = [2,4,9];
  $NR = calculateValue($nrIds, $recipeId);
  $LIM3 = calculateValue($lim3Ids, $recipeId);
  $NRF = $NR - $LIM3;

  return [$NR, $LIM3, $NRF];

}

function calculateValue($array, $recipeId) {
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