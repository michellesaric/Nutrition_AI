<?php

function calculateSaturatedFatPoints($saturatedFat) {
    if ($saturatedFat <= 1) {
        return 0;
    } elseif ($saturatedFat <= 2) {
        return 1;
    } elseif ($saturatedFat <= 3) {
        return 2;
    } elseif ($saturatedFat <= 4) {
        return 3;
    } elseif ($saturatedFat <= 5) {
        return 4;
    } elseif ($saturatedFat <= 6) {
        return 5;
    } elseif ($saturatedFat <= 7) {
        return 6;
    } elseif ($saturatedFat <= 8) {
        return 7;
    } elseif ($saturatedFat <= 9) {
        return 8;
    } elseif ($saturatedFat <= 10) {
        return 9;
    } else {
        return 10;
    }
}

?>