/*
// formas de declarar un array
 const frutas = ["Manzana", "Banana", "Pera", "Anana",6,7];


//para acceder a un elemento array[indice de elemento]
document.write(frutas[4]);*/

// Arrays asociativos
let arrayAsociativo = {
    nombre: "BenjaPC",
    procesador: "i7-10700",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = arrayAsociativo["nombre"];
let procesador = arrayAsociativo["procesador"];
let ram = arrayAsociativo["ram"];
let espacio = arrayAsociativo["espacio"];

//Asi se muestran los datos
document.write(arrayAsociativo["espacio"]+"<br>");
let mensaje = `El nombre de mi pc es <strong>${nombre}</strong><br>`+
              `El procesador es <strong>${procesador}</strong> <br>`+
              `La memoria ram es <strong>${ram}</strong><br>`+
              `El espacio es <strong>${espacio}</strong>`
document.write(mensaje);