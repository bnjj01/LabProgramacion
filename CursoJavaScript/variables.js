/*declaracion de variables
var = es de alcance global, es valida para todos los cuerpos.
let = nos limita el alcance de la variable al bloque o cuerpo en donde nos encontramos.
const = para declarar una constante y si o si se tiene que inicializar cuando se declara.
let recipiente;
let y var pueden cambiar los valores.
*/
//Inicializar variable
let recipiente = "pedro";

/*tipo de datos
string, "", ''
number
booleano
*/ 
string = 'cadena de texto';
number = 19;
Boolean = false;

/*casos especiales de datos: para variables que no estan definidas o hay un error
undefined = variable indefinida, la variable existe pero no esta inicializada.
null = variable inicializada como "vacia".
nan = Valor que indica que se esta haciendo una operacion con un dato que no es un numero.
*/
/*
let numero = null;
let numero1 = 5;
let numeor2 = 6;

alert(numero1 + numeor2);*/

/*Declaracion multiple de variables
let numero1, numero2, numero3;
numero1 = 21;
numero2 = 3;
numero3 = 56;
alert(numero1);
alert(numero2);
alert(numero3);
*/
/*EL Prompt*/
prompt("decime tu nombre");

let nombre = prompt("deime tu apellido");


alert("tu apellido es " + nombre);


