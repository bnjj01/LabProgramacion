const botonEditar = document.getElementById("btn-editar");
const botonActualizar = document.getElementById("btn-actualizar");
const botonCancelar = document.getElementById("btn-cancelar");
const campos = document.querySelectorAll(".form-control, .form-select");
const formulario = document.querySelector("form");

botonEditar.addEventListener("click", function(evento){
    campos.forEach(campo=>{
        campo.disabled = false;
    });

    botonEditar.classList.add("d-none");
    botonActualizar.classList.remove("d-none");
    botonCancelar.classList.remove("d-none");

    document.getElementById("apellido").focus();
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