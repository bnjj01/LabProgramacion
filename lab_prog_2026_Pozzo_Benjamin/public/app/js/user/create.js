import userController from "./controller.js";

document.addEventListener("DOMContentLoaded", function(){
    const btnGuardar = document.getElementById("btn-guardar");
    const formulario = document.getElementById("user-form");
    const mensaje = document.getElementById("message");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();
        const clave = document.getElementById("clave").value;
        const confClave = document.getElementById("confirmarClave").value;

        if (clave !== confClave){
            alert('las contraseñás no coinciden, por favor introducelas de nuevo');
            return;
        }
        
        mensaje.classList.remove("d-none");
        formulario.reset();
        
        setTimeout(()=>{
            mensaje.classList.add("d-none");
        }, 9000)
    })

    if (btnGuardar){
        btnGuardar.addEventListener("click",function(evento){
            evento.preventDefault();
            userController.save();
        })
    }
})