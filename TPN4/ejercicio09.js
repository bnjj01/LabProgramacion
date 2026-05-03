const tareasPendientes = [
    {
        "descripcion" : "limpiar baño",
        "completada" : true
    },
    {
        "descripcion" : "limpiar baño",
        "completada" : false
    },
    {
        "descripcion" : "limpiar baño",
        "completada" : true
    },
    {
        "descripcion" : "limpiar baño",
        "completada" : false
    },
    {
        "descripcion" : "limpiar baño",
        "completada" : false
    },
    {
        "descripcion" : "limpiar baño",
        "completada" : true
    }
]
function cuantasCompletadas() {
       let total = tareasPendientes.reduce((contador, tarea) => {
           return tarea.completada ? contador + 1 : contador;
       }, 0);
       console.log(total);
   }
// cuantasCompletadas();

function haySinCompletar(){
    const algunaSinCompletar= (tarea) => tarea.completada === false;
    console.log(tareasPendientes.some(algunaSinCompletar));
}
// haySinCompletar()

function tareasCompletadas (){
    const estaCompletada = (tarea) => tarea.completada;
    console.log(tareasPendientes.every(estaCompletada));
}
// tareasCompletadas()
function tareasIncompletas(){
    let tareasIncompletas = tareasPendientes.filter((tarea)=> tarea.completada === false)
    console.log(tareasIncompletas);
}
// tareasIncompletas()

function estadosTareas () {
    tareasPendientes.forEach(tarea => {
        console.log(tarea.completada)
    });
}
// estadosTareas();