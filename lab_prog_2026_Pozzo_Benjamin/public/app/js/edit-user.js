const botonEditar = document.getElementById("btn-editar");
const botonActualizar = document.getElementById("btn-actualizar");
const campos = document.querySelectorAll(".form-control, .form-select");

botonEditar.addEventListener("click", function(evento){
    campos.forEach(campo=>{
        campo.disabled = false;
    });

    botonEditar.classList.add("d-none");
    botonActualizar.classList.remove("d-none");

    document.getElementById("apellido").focus();
}) 