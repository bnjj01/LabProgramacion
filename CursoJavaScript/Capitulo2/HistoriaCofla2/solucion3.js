const sumar = (num1, num2) =>  parseInt(num1) + parseInt(num2);

const restar = (num1, num2) => num1 - num2;

const dividir = (num1, num2) => {
    if(num2 === "0"){
        return "No se puede realizar la division entre cero."
    }else{
        return "El Resultado de la division es: " + num1 / num2;
    }
}
const multiplicar = (num1, num2) => num1 * num2;

alert("¿Que operacion deseas realiza?");
let operacion = prompt("1: Sumar 2: Restar 3: Dividir 4: Multiplicar ");

if(operacion == 1){
    let numero1=prompt("Ingrese el primer numero: ");
    let numero2=prompt("Ingrese el segundo numero: ");
    let resultado = sumar(numero1, numero2)
    alert(`El resultado de la suma es: ${resultado}`);
}else if(operacion == 2){
    let numero1=prompt("Ingrese el primer numero: ");
    let numero2=prompt("Ingrese el segundo numero: ");
    let resultado = restar(numero1, numero2)
    alert(`El resultado de la resta es: ${resultado}`);
}else if(operacion == 3){
    let numero1=prompt("Ingrese el primer numero: ");
    let numero2=prompt("Ingrese el segundo numero: ");
    let resultado = dividir(numero1, numero2)
    alert(`${resultado}`);
}else if(operacion == 4){
    let numero1=prompt("Ingrese el primer numero: ");
    let numero2=prompt("Ingrese el segundo numero: ");
    let resultado = multiplicar(numero1, numero2)
    alert(`El resultado de la suma es: ${resultado}`);
}else {
    alert("No se encontro la operacion.");
}