<?php

function calculateSodiumPoints($sodium) {
    if ($sodium <= 90) {
        return 0;
    } elseif ($sodium <= 180) {
        return 1;
    } elseif ($sodium <= 270) {
        return 2;
    } elseif ($sodium <= 360) {
        return 3;
    } elseif ($sodium <= 450) {
        return 4;
    } elseif ($sodium <= 540) {
        return 5;
    } elseif ($sodium <= 630) {
        return 6;
    } elseif ($sodium <= 720) {
        return 7;
    } elseif ($sodium <= 810) {
        return 8;
    } elseif ($sodium <= 900) {
        return 9;
    } else {
        return 10;
    }
}

?>