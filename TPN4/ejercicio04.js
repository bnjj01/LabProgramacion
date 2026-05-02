
function rango(inicio, fin){
    let longitud = fin - inicio;
    let arreglo = [];
    let contador = inicio;
    for (let i = inicio;i <= fin; i++){
        arreglo.push(i);
        contador++;
    }
    return arreglo;
}

console.log(rango(5,7));