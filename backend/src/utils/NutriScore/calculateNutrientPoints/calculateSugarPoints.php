<?php

function calculateSugarPoints($sugar) {
    if ($sugar <= 4.5) {
        return 0;
    } elseif ($sugar <= 9) {
        return 1;
    } elseif ($sugar <= 13.5) {
        return 2;
    } elseif ($sugar <= 18) {
        return 3;
    } elseif ($sugar <= 22.5) {
        return 4;
    } elseif ($sugar <= 27) {
        return 5;
    } elseif ($sugar <= 31) {
        return 6;
    } elseif ($sugar <= 36) {
        return 7;
    } elseif ($sugar <= 40) {
        return 8;
    } elseif ($sugar <= 45) {
        return 9;
    } else {
        return 10;
    }
}

?>