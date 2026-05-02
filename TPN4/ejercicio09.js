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
function haySinCmpoletar(){
    
}

function tareasCompletadas (){
    const estaCompletada = (tarea) => tarea.completada;
    console.log(tareasPendientes.every(estaCompletada));
}

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