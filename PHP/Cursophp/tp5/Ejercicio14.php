<?php
class GestionAlumno{
    private $alumnos = [];

    public function guardarAlumno($alumno){
        if(!($alumno instanceof Alumno)){
            throw new Exception("Error: El dato ingresado no es un alumno válido.");
        }
        $this->alumnos[]=$alumno;
    }

    public function buscarPorNombre(string $nombre){
        foreach($this->alumnos as $alumno){
            if($alumno->nombre === $nombre){
                return $alumno; 
            }
            return null;
        }
    }

    public function listarAlumnos(){
        return $this->alumnos;
    }

    public function guardarEnJSON(string $nombreArchivo) {
        $datosJSON = json_encode($this->alumnos, JSON_PRETTY_PRINT);
        file_put_contents($nombreArchivo, $datosJSON);
    }
}
?>