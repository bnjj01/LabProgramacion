function range(inicio, fin, incremento) {
    let arreglo = [];

    if ((incremento === undefined) && (inicio <= fin)) {
        incremento = 1;
    } else if ((incremento === undefined) && (inicio > fin)) {
        incremento = -1;
    }
    if (inicio <= fin) {
        for (let i = inicio; i <= fin; i += incremento) {
            arreglo.push(i);
        }
    } else if (inicio > fin) {
        for (let i = inicio; i >= fin; i += incremento) {
            arreglo.push(i);
        }
    }
    return arreglo;
}
console.log(range(5, 5))
