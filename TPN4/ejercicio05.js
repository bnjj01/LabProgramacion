function range(inicio, fin){
    let arreglo = [];
    for (let i = inicio;i <= fin; i++){
        arreglo.push(i);
    }
    return arreglo;
}
function sum(arreglo){
    let suma=0;
    for(let i of arreglo){
        suma+=i;
    }
    return suma;
}
console.log(sum(range(1,8)))
