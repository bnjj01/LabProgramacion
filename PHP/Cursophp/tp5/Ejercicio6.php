<?php
    class Persona{
        public $nombre = "Joakin";
        public $edad = 22;

        public function presentarse(){
            echo "Hola soy ".$this->nombre." y tengo ".$this->edad." años.";
        }
    }

   $joakin = new Persona;
   $joakin -> presentarse();
?>