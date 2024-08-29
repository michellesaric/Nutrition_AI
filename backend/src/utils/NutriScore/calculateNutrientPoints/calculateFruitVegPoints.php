<?php

function calculateFruitVegPoints($fruitVeg) {
    if ($fruitVeg <= 40) {
        return 0;
    } elseif ($fruitVeg <= 60) {
        return 1;
    } elseif ($fruitVeg <= 65) {
        return 2;
    } elseif ($fruitVeg <= 70) {
        return 3;
    } elseif ($fruitVeg <= 80) {
        return 4;
    } else {
        return 5;
    }
}

?>