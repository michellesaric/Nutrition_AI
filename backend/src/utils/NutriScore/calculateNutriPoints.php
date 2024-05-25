
<?php
require_once 'backend/src/config/Database.php';
require_once 'backend/src/utils/getNutrientValue.php';
require_once 'backend/src/utils/NutriScore/calculateAverageMeal.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateEnergyPoints.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateSugarPoints.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateSaturatedFatPoints.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateSodiumPoints.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateFiberPoints.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateProteinPoints.php';
require_once 'backend/src/utils/NutriScore/calculateNutrientPoints/calculateFruitVegPoints.php';
require_once 'backend/src/utils/NutriScore/getFruitVeg.php';
require_once 'backend/src/utils/NutriScore/calculateNutriScore.php';


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
?>