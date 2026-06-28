import itemController from "./controller.js";

document.addEventListener("DOMContentLoaded", function(){

    itemController.load(1);

    const botonEditar = document.getElementById("btn-editar");
    const botonActualizar = document.getElementById("btn-actualizar");
    const botonCancelar = document.getElementById("btn-cancelar");
    const botonEliminar = document.getElementById("btn-eliminar");
    const campos = document.querySelectorAll(".form-control, .form-select");
    const formulario = document.querySelector("form");


    if(botonActualizar && botonCancelar && botonEditar){
        botonEditar.addEventListener("click", function(evento){
            campos.forEach(campo =>
                campo.disabled = false
            );
            
            botonEditar.classList.add("d-none");
            botonActualizar.classList.remove("d-none");
            botonCancelar.classList.remove("d-none");

            document.getElementById("codigo").focus();
        })

        botonCancelar.addEventListener("click", function(evento){
            if(formulario){
                formulario.reset();
            }
            campos.forEach(campo=>{
                campo.disabled = true;
            })
            botonActualizar.classList.add("d-none");
            botonCancelar.classList.add("d-none");
            botonEditar.classList.remove("d-none");
        });

        if(botonActualizar){
            botonActualizar.addEventListener("click",function(evento){
                evento.preventDefault();
                
                const exito = itemController.update(); 
                if (exito){
                    botonActualizar.classList.add("d-none");
                    botonCancelar.classList.add("d-none");
                    botonEditar.classList.remove("d-none");
                }
            });
        }

        if(botonEliminar){
            botonEliminar.addEventListener("click",function(evento){
                evento.preventDefault();

                const idActual = parseInt(document.getElementById('item-id').value);
                itemController.delete(idActual);
            })
        }
    }
});