<?php 

require_once 'backend/src/utils/getDailyValue.php';

function calculateNR3_LIM33_NRF3($recipeId) {

  $nr3Ids = [5, 7, 8, 22, 37];
  $lim33Ids = [2, 4, 9]; 
  
  $NR3 = calculateFactor($nr3Ids, $recipeId);
  $LIM33 = calculateFactor($lim33Ids, $recipeId);

  $MP3_4 = calculateWeightByCategory($recipeId, 4) / 350;
  $MP3_6 = calculateWeightByCategory($recipeId, 6) / 720;
  $MP3_15 = calculateWeightByCategory($recipeId, 15) / 720;

  $MP3 = $MP3_4 + $MP3_6 + $MP3_15;

  $NRF3 = $NR3 + $MP3 - $LIM33;

  return [$NR3, $LIM33, $NRF3];

}

?>