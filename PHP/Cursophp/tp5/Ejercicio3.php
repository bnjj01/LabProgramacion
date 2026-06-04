<?php
function mayorDeTres($a, $b, $c){
    $mayor = $a;    
    if($mayor <= $b){
        $mayor = $b;
    }
    if($mayor <= $c){
        $mayor = $c;
    }
    return $mayor;
}

$resultado = mayorDeTres(1 , 2, 3);

echo $resultado;

?>