<?php

function calculateEnergyPoints($energy) {
    if ($energy <= 335) {
        return 0;
    } elseif ($energy <= 670) {
        return 1;
    } elseif ($energy <= 1005) {
        return 2;
    } elseif ($energy <= 1340) {
        return 3;
    } elseif ($energy <= 1675) {
        return 4;
    } elseif ($energy <= 2010) {
        return 5;
    } elseif ($energy <= 2345) {
        return 6;
    } elseif ($energy <= 2680) {
        return 7;
    } elseif ($energy <= 3015) {
        return 8;
    } elseif ($energy <= 3350) {
        return 9;
    } else {
        return 10;
    }
}

?>