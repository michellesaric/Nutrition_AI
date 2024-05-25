
<?php
require_once '../config/Database.php';
require_once './getNutrients.php';
require_once './calculateAverageMeal.php';
require_once './getFruitVeg.php';
require_once './calculateNutrientPoints/calculateEnergyPoints.php';
require_once './calculateNutrientPoints/calculateSugarPoints.php';
require_once './calculateNutrientPoints/calculateSaturatedFatPoints.php';
require_once './calculateNutrientPoints/calculateSodiumPoints.php';
require_once './calculateNutrientPoints/calculateFiberPoints.php';
require_once './calculateNutrientPoints/calculateProteinPoints.php';
require_once './calculateNutrientPoints/calculateFruitVegPoints.php';


function calculateNutriPoints($recipeId) {
    $averageMeal100 = calculateAverageMeal($recipeId);
    $energy = getEnergy($recipeId, $averageMeal100);
    $sugar = getSugar($recipeId, $averageMeal100);
    $saturatedFat = getSaturatedFat($recipeId, $averageMeal100);
    $sodium = getSodium($recipeId, $averageMeal100);
    $fibers = getFibers($recipeId, $averageMeal100);
    $proteins = getProteins($recipeId, $averageMeal100);
    $fruitVeg = getFruitVeg($recipeId, $averageMeal100);

    $energyPoints = calculateEnergyPoints($energy);
    $sugarPoints = calculateSugarPoints($sugar);
    $saturatedFatPoints = calculateSaturatedFatPoints($saturatedFat);
    $sodiumPoints = calculateSodiumPoints($sodium);
    $fiberPoints = calculateFiberPoints($fibers);
    $proteinPoints = calculateProteinPoints($proteins);
    $fruitVegPoints = calculateFruitVegPoints($fruitVeg);

    $A = $energyPoints + $sugarPoints + $saturatedFatPoints + $sodiumPoints;
    $C = $fiberPoints + $proteinPoints + $fruitVegPoints;

    $nutriScorePoints = 0;

    if($A >= 11 && $fruitVegPoints = 5) {
        $nutriScorePoints = $A - $C;
    } else if ($A >= 11 && $fruitVegPoints < 5) {
        $nutriScorePoints = $A - $fruitVegPoints - $fiberPoints;
    } else {
        $nutriScorePoints = $A - $C;
    }

    $nutriScore = calculateNutriScore($nutriScorePoints);

    return [$nutriScorePoints, $nutriScore];
}

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