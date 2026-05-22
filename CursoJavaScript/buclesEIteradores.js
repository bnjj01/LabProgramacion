/*
// sentencia label
const array1 = ["oriana","claudia","puyol"]
const array2 = ["pedro","marcelo",array1,"Claudio"]

forLabel:
for (let array in array2){
    // recorriendo arrays
    if(array == 2){
        for(let array of array1){
            document.write(array+"<br>");
            break forLabel;
        }
    }else{
        document.write(array2[array]+"<br>")
    }
}
*/
/*
//for in, 
const animales =["Gato","Perro", "Elefante"]
//la variable animal toma la posicion de cada elemnto.
for(let animal in animales){
    document.write(animal+"<br>");
}
// for of
//la variable animal toma el valor de cada elemento.
for(let animal of animales){
    document.write(animal+"<br>");
}

//for
for(let i = 0; i < 20; i++){
    if (i == 15){
        continue;
        //break;
    }
    document.write(i+"<br>");
}
 
*/

/*
//break
let numero = 0;
while(numero < 1000){
    numero++;
    document.write(numero+"<br>")
    if (numero == 10){
        break;
    }
}*/

/*
//do-while primero se ejecutan las instrucciones y despues se evalua la condicion
let numero = 0;
do{
    numero++;
    document.write(numero+"<br>");
}
while(numero<6);
*/


/*
//while evalua la condicion y despues ejecuta las instrucciones
let numero = 6;
let contador = 0;
while(contador < numero){
    contador++;
    document.write("contador es igual a: "+ contador + "<br>");
}
document.write("numero es igual a: "+numero+ "<br>");*/