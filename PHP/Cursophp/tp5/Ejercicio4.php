<?php

// forma que saque de la documentacion.
    $array=[2,3,4,6,3,11,0,125];
    function pares($a){
        return !($a & 1);
    }

    echo "pares: \n";
    print_r(array_filter($array, "pares"));

/* 1ra forma.
    $array=[1,3,4,2,5,6,11];
    function devolverPares($array){
        foreach($array as $valor){
            if(($valor % 2) === 0){
                echo $valor."<br>";
            }
        }
    }

    devolverPares($array);
*/
?>