<?php 
require_once 'backend/src/utils/NutricionisticParameters/calculateFactor.php';

function calculateNR_LIM3_NRF($recipeId) {

  $nrIds = [5, 7, 8, 10, 11, 12, 13, 17, 19];
  $lim3Ids = [2,4,9];
  $NR = calculateFactor($nrIds, $recipeId);
  $LIM3 = calculateFactor($lim3Ids, $recipeId);
  $NRF = $NR - $LIM3;

  return [$NR, $LIM3, $NRF];
}

?>