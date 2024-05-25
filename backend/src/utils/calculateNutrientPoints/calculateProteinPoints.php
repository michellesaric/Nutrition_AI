<?php

function calculateProteinPoints($protein) {
    if ($protein <= 1.6) {
        return 0;
    } elseif ($protein <= 3.2) {
        return 1;
    } elseif ($protein <= 4.8) {
        return 2;
    } elseif ($protein <= 6.4) {
        return 3;
    } elseif ($protein <= 8.0) {
        return 4;
    } else {
        return 5;
    }
}

?>