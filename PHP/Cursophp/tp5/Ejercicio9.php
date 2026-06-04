<?php
    class Alumno{
        public $nombre;
        public $listaNotas;
        
        public function __construct(string $nombre, array $listaNotas = []){
            $this -> nombre = $nombre;
            $this -> listaNotas = $listaNotas;
        }

        public function calcularPromedio(){
            if(count($this -> listaNotas)== 0)return 0;
            return array_sum($this -> listaNotas) / count($this -> listaNotas) ;
        }
    }
    
    class Curso{
        protected $alumnos=[];
        public function agregarAlumno(Alumno $alumno){
            $this->alumnos[]=$alumno;
        }

        public function calcularPromedio(){
            $suma=0;    
            if (count($this->alumnos) == 0) return 0;
            foreach($this->alumnos as $alumno){
                $suma+=$alumno->calcularPromedio();
            }
            return $suma/count($this->alumnos);
        }

        public function getAprobados():array{
            $aprobados=[];
            foreach($this->alumnos as $alumno){
                if($alumno->calcularPromedio()>=6){
                    $aprobados[] = $alumno;
                }
            }
            return $aprobados;
        }
    }
    
    $curso1 = new Curso();
    $alumno1 = new Alumno("Benja",[4,6,10,9]);
    $alumno2 = new Alumno("Augusto",[4,5,6,7]);
    $alumno3 = new Alumno("Agustin",[5,6,7,8]);
    $alumno4 = new Alumno("Sebastian",[6,7,8,10]);
    $alumno5 = new Alumno("Esteban",[10,5,7,8]);

    $curso1 -> agregarAlumno($alumno1);
    $curso1 -> agregarAlumno($alumno2);
    $curso1 -> agregarAlumno($alumno3);
    $curso1 -> agregarAlumno($alumno4);
    $curso1 -> agregarAlumno($alumno5);

    $pasaron=$curso1->getAprobados();

    foreach($pasaron as $alumno){
        echo $alumno -> nombre."<br>";
    }

?>