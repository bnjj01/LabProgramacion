let free = false;

const validarUsuario = (horario) =>{
    let edad = prompt("¿Cuantos años tenes?");
    if (edad > 18){
        if(horario >= 2 && horario < 7 && free == false){
            alert("Podes pasar gratis pibe, porque sos la primera persona despues de las 2am");
            free = true;
        }else{
            alert(`Son las ${horario}hs y podes pasar, pero tenes que pagar para entrar.`);
        }
        
    }else{
        alert("Sos menor de edad. No podes pasar")
    }
    
}

validarUsuario(2);
validarUsuario(4);
validarUsuario(5);