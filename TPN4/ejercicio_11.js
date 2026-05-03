const botonGenerar = document.getElementById("btn-generar");
const botonCalcular = document.getElementById("btn-calcular");

botonGenerar.addEventListener("click", function(evento){
    let filaA = parseInt(document.getElementById("fila-A").value);
    let columnaA = parseInt(document.getElementById("columna-A").value);
    let filaB = parseInt(document.getElementById("fila-B").value);
    let columnaB = parseInt(document.getElementById("columna-B").value);
    
    if (isNaN(filaA) || isNaN(columnaA) || isNaN(filaB) || isNaN(columnaB)){
        alert("Por favor ingrese todos los numeros.");
        return;
    }else if((filaA !== filaB) || (columnaA !== columnaB)){
        alert("Las matrices no tienen el mismo tamaño.");
        return;
    }
    botonCalcular.disabled = false;

    const contenedorMatrices = document.getElementById("matriz-generada");

    let matrices = "<h4>Matriz A</h4>"

    for (let i = 0; i < filaA; i++){
        for (let j = 0; j < columnaA; j++){
            matrices += `<input type="number" id="A-${i}-${j}" style="width: 40px; margin: 2px;">`;
        }
        matrices += "<br>";
    }

    matrices += "<h4>Matriz B</h4>"

    for (let i = 0; i < filaA; i++){
        for (let j = 0; j < columnaA; j++){
            matrices += `<input type="number" id="B-${i}-${j}" style="width: 40px; margin: 2px;">`;
        }
        matrices += "<br>";
    }

    contenedorMatrices.innerHTML = matrices;
})
botonCalcular.addEventListener("click", function(evento){
    let filas = parseInt(document.getElementById("fila-A").value);
    let columnas = parseInt(document.getElementById("columna-A").value);

    const contenedorResultado = document.getElementById("matriz-resultado");
    let resultado = "<h4>Suma</h4>";
    for (let i = 0; i < filas; i++){
        for (let j = 0; j < columnas; j++){
            let valorA = parseInt(document.getElementById(`A-${i}-${j}`).value);
            let valorB = parseInt(document.getElementById(`B-${i}-${j}`).value);

            if (isNaN(valorA) || isNaN(valorB)){
                alert("Por favor ingrese todos los numeros.");
                return;
            }
            let suma = valorA + valorB;
    
            resultado += `<input type="number" value="${suma}" readonly style="width: 40px; margin: 2px;">`;
        }

        resultado += "<br>";
}
    
    contenedorResultado.innerHTML = resultado;
})
