<?php

function calculateFiberPoints($fiber) {
    if ($fiber <= 0.9) {
        return 0;
    } elseif ($fiber <= 1.9) {
        return 1;
    } elseif ($fiber <= 2.8) {
        return 2;
    } elseif ($fiber <= 3.7) {
        return 3;
    } elseif ($fiber <= 4.7) {
        return 4;
    } else {
        return 5;
    }
}

?>