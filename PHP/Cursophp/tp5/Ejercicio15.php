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
    public function cargarDesdeJSON(string $nombreArchivo) {
        if (!file_exists($nombreArchivo)) {
            throw new Exception("Error: El archivo no existe.");
        }
        $datosJSON = file_get_contents($nombreArchivo);
        $listaDecodificada = json_decode($datosJSON, true);
        $this->alumnos = [];
        if (is_array($listaDecodificada)) {
            foreach ($listaDecodificada as $datosAlumno) {
                $nombre = $datosAlumno['nombre'];
                $notas = $datosAlumno['listaNotas'];
                
                $alumnoRevivido = new Alumno($nombre, $notas);
                
                $this->guardarAlumno($alumnoRevivido); 
            }
        }
    }
}
?>