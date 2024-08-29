<?php

function calculateNutriScore($nutriScorePoints) {
  switch (true) {
    case ($nutriScorePoints >= -15 && $nutriScorePoints < 0):
      return 1;
    case ($nutriScorePoints >= 0 && $nutriScorePoints < 3):
      return 2;
    case ($nutriScorePoints >= 3 && $nutriScorePoints < 11):
      return 3;
    case ($nutriScorePoints >= 11 && $nutriScorePoints < 19):
      return 4;
    case ($nutriScorePoints >= 19 && $nutriScorePoints <= 40):
      return 5;
    default:
      return null;
  }
}
?>