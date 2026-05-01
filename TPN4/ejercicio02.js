 let numero = 1;
 while (numero <= 100) {
    if(((numero % 3) == 0) && ((numero % 5) != 0)){
        console.log("Fizz");
    }else if (((numero %  3) != 0) && ((numero % 5) == 0 )) {
            console.log("Buzz");
        }else if (((numero % 3) == 0) && ((numero % 5) == 0)) {
                console.log("FizzBuzz");
            }else console.log(numero);
     numero++;
 }