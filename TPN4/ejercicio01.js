const numeral = "#";
let resultadoConcatenacion = "";
let contador = 0;
while(contador < 7){
    sumarNumeral();
    console.log(resultadoConcatenacion);
    contador++;
}

function sumarNumeral(){
    resultadoConcatenacion += numeral;
}