<?php
    /*
    $estudiantes = array("Carlos","Benjamin", "Juan", "Ramiro", "Manuel");
    $frutas = [
        "Fresas" => 100, 
        "Peras"=> 30, 
        "Sandias"=>10,
        "Melocotones" => 17, 
        "Manzanas"=> 9
    ];
    # recorre el valor de cada posicion
    foreach($estudiantes as $valor){
        echo $valor."<br>";
    }

    # Recorre tanto la posicion como el valor
    foreach($estudiantes as $posicion => $valor){
        echo $posicion." - ".$valor."<br>";
    }

    foreach($frutas as $clave => $valor){
        echo "Hay ".$valor." ".$clave." en el invetario."."<br>";
    }*/

    $productos = [
        ["codigo" => "A0001", "descripcion" => "Mouse"],
        ["codigo" => "A0002", "descripcion" => "Teclado"],
        ["codigo" => "A0003", "descripcion" => "Monitor"],
        ["codigo" => "A0004", "descripcion" => "Impresor"]
    ];

    foreach($productos as $prod){
        echo $prod["codigo"]." - ".$prod["descripcion"]."<br>";
    }