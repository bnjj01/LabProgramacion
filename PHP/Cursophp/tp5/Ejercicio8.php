<?php
    class Persona{
        public string $nombre;
        public int $edad;

        public function __construct(string $nombre,int $edad){
            $this -> nombre = $nombre;
            $this -> edad = $edad;
        }
    }
    
    
    $personas=[
        $persona1 = new Persona("Esteban",23),
        $persona2 = new Persona("Camila",10),
        $persona3 = new Persona("Joako",18),
        $persona4 = new Persona("Antonio",12),
        $persona5 = new Persona("Andrea",17)
    ];

    function categorizar(array $listaPersonas):array{
        $ninios =[];
        $adolescentes = [];
        $adultos = [];
        foreach($listaPersonas as $per){
            if($per-> edad < 13){
                $ninios[]= $per;
            }else if($per->edad <= 17){
                $adolescentes[]= $per;
            }else{
                $adultos[]= $per;
            }
        }
        return[
            "ninios"=> $ninios,
            "adolescentes"=> $adolescentes,
            "adultos"=> $adultos
        ];
    }

    $personasAgrupadas = categorizar($personas);

    echo "Niños: <br>";
    print_r($personasAgrupadas["ninios"]);

    echo "<br><br>Adolescentes: <br>";
    print_r($personasAgrupadas["adolescentes"]);

    echo "<br><br>Adultos: <br>";
    print_r($personasAgrupadas["adultos"]);

?>