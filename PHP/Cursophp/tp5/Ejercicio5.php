<?php
    #$array=[];
    $array=[1,2,3,4,5,6,10];

    function calcularPromedio($array){        
        if(count($array) == 0) return "0";
        return array_sum($array) / count($array);
    }
/*
    function calcularPromedio($array){        
        $suma=0;
        if(count($array) == 0){
            echo "0";
        }
        foreach( $array as $valor){
            $suma+=$valor;
        }
        return $suma/count($array);
    }
*/
    echo calcularPromedio($array);
?>