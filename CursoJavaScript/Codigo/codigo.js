
const peticion = new XMLHttpRequest();


peticion.addEventListener("load", ()=>{
    if(peticion.status == 200){
        console.log(JSON.parse(peticion.response).Nombre)
    }
})


/*
peticion.addEventListener("readystatechange", ()=>{
    console.log(peticion.readyState);
    console.log(peticion.response);
})
*/
peticion.open("GET", "informacion.txt");

peticion.send();

