<?php
    # Arra de tipo escalar
    // asi se definen(1ra forma):
    $estudiantes = array("Carlos","Benjamin", "Juan", "Ramiro");
    $estudiantes[3]="Claudia";
    # echo $estudiantes[3];

    // nueva sintaxis:
    $alumnos=["Carlitos", "Mateo", "Chiquitapia"];
    #echo $alumnos[2];

    # Array asociativo. se llama asociativo porque cada elemento tiene asociado un valor.
    $tutor = [
        "nombre"=>"Matias", 
        "dni"=>44447183, 
        "edad"=>23
    ];
    $tutor["edad"]=19;
    #echo $tutor["dni"];
    #echo $tutor["edad"];

    #Arrays multidimensionales.
    $tutor_2 = [
        "nombre"=>"Jorge", 
        "dni"=>2321123, 
        "edad"=>20,
        "cursos"=>["PHP","CSS","Phyton"]
    ];

    #$tutor_2["cursos"][1]="javaScript";

    #echo $tutor_2["cursos"]["nombre"];
    #echo $tutor_2["cursos"][1];

    // contar cuantos elementos tiene un arrays
    echo count($tutor);
    #echo count($tutor_2,COUNT_RECURSIVE);