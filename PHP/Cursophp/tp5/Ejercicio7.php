<?php
    class Persona{
        public $nombre;
        public $edad;

        public function __construct(string $nombre,int $edad){
            $this->nombre = $nombre;
            $this->edad = $edad;
        }

        public function presentarse(){
            echo "Hola soy ".$this->nombre." y tengo ".$this->edad." años.";
        }
    }

    class Alumno extends Persona{

        #[Override]
        public function __construct(string $nombre, int $edad){
            parent::__construct($nombre, $edad);
        }

        public $listaNotas = [6,7,8,9,10];

        public function calcularPromedio(){
            if(count($this -> listaNotas)== 0)return 0;
            return array_sum($this -> listaNotas) / count($this -> listaNotas) ;
        }
    }



    $joakin = new Alumno("Joakin",23);

    echo $joakin -> calcularPromedio();
?>