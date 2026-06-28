import userController from "./controller.js";

document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("user-form");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        
        userController.save();
    })

})