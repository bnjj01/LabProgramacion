<?php
    define("NOMBRE", "Benja");
    echo NOMBRE;
    const APELLIDO = "Pozzo";
    echo APELLIDO;

    define("ALUMNOS", array("Benja","Tomas","Roger"));

    echo ALUMNOS[2];

    class Usuario{
        const PERFIL_ADMINISTRADOR = "Administrador";
        const PERFIL_OPERADOR = "Operador";
    }
    echo Usuario::PERFIL_ADMINISTRADOR . "\n";