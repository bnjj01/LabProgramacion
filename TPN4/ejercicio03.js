let string1 = "#";
let string2 = " ";
let stringFinal = "";
for(let i = 0; i < 4; i++){
    for(let i = 0; i < 3; i++){
        stringFinal += string2 + string1;
    }
    stringFinal += string2 + string1 + "\n";
    for(let i = 0; i < 3; i++){
        stringFinal += string1 + string2;
    }
    stringFinal += string1 + string2 + "\n";
}
console.log(stringFinal);
