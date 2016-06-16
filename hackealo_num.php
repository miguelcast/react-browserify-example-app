<?php

// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($N) {
    // write your code in PHP5.5
    $arrSeq = [1];
    $intSum = 1;
    $intIndex = 1;
    while($intSum < $N){
        $intTmpNum = $arrSeq[$intIndex - 1] * 2;
        $intTmpSum1 = $intSum + 1;
        if($intTmpNum <= $N && !(($intTmpSum1 * 2) == $N)){
            $arrSeq[$intIndex] = $intSum = $intTmpNum;
        }else{
            $arrSeq[$intIndex] = $intSum = $intSum + 1;
        }
        $intIndex++;
    }
    return count($arrSeq);
}


function solution2($M, $A) {
    $N = sizeof($A);
    $count = array_pad(array(), $M + 1, 0);
    $maxOccurence = 1;
    $index = -1;
    for ($i = 0; $i < $N; $i++) {
        if ($count[$A[$i]] > 0) {
            $tmp = $count[$A[$i]];
            if ($tmp > $maxOccurence) {
                $maxOccurence = $tmp;
                $index = $i;
            }
            $count[$A[$i]] = $tmp + 1;
        } else {
            $count[$A[$i]] = 1;
        }
    }
    return $A[$index];
}




