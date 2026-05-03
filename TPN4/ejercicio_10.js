
const selector = document.getElementById("select-color");
const limpiar = document.getElementById("btn-limpiar");
const botonCambiar = document.getElementById("btn-cambiar");

botonCambiar.addEventListener("click", function(evento){
    evento.preventDefault();
    const colorElegido = selector.value;
    document.body.style.backgroundColor = colorElegido;
});

limpiar.addEventListener("click", function(evento){
    evento.preventDefault();
    document.body.style.backgroundColor = "white";
});