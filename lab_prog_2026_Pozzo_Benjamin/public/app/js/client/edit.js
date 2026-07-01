import clientController from "./controller.js";
import clientService from "./service.js";

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("client-form");
    const selectTipo = document.getElementById("tipo");
    const idCliente = document.getElementById("client-id").value;
    
    const botonEditar = document.getElementById("btn-editar");
    const botonActualizar = document.getElementById("btn-actualizar");
    const botonCancelar = document.getElementById("btn-cancelar");
    const botonEliminar = document.getElementById("btn-eliminar"); 
    
    // Seleccionamos todos los campos interactivos
    const campos = document.querySelectorAll(".form-control, .form-select");

    // 1. Inicialización de la vista
    if (selectTipo) {
        // Acomodamos los campos instantáneamente según lo que haya cargado PHP
        clientController.toggleCamposTipo(selectTipo.value);
        
        // Si el usuario cambia de Particular a Empresa mientras edita, reaccionamos en vivo
        selectTipo.addEventListener("change", (e) => {
            clientController.toggleCamposTipo(e.target.value);
        });
    }

    if (botonEditar && botonActualizar && botonCancelar) {
        
        // Lógica del botón Editar
        botonEditar.addEventListener("click", function() {
            campos.forEach(campo => campo.disabled = false);
            botonEditar.classList.add("d-none");
            botonActualizar.classList.remove("d-none");
            botonCancelar.classList.remove("d-none");
            // Ponemos el foco en el primer input visible
            if (selectTipo.value === 'Particular') {
                document.getElementById("apellido").focus();
            } else {
                document.getElementById("razon_social").focus();
            }
        });

        // Lógica del botón Cancelar
        botonCancelar.addEventListener("click", function() {
            if(formulario) {
                formulario.reset();
                // Al restaurar, volvemos a acomodar las secciones al estado original
                clientController.toggleCamposTipo(selectTipo.value);
            }
            campos.forEach(campo => campo.disabled = true);
            botonActualizar.classList.add("d-none");
            botonCancelar.classList.add("d-none");
            botonEditar.classList.remove("d-none");
        });

        // Lógica del botón Actualizar
        botonActualizar.addEventListener("click", async function(evento) {
            evento.preventDefault();
            
            // Validamos que los campos requeridos estén llenos (HTML5 validation)
            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            const data = Object.fromEntries(new FormData(formulario));
            data.id = idCliente; // Aseguramos que el ID viaje al servidor

            const response = await clientService.update(data); 
            
            if (response.success) {
                alert("Cliente actualizado correctamente.");
                campos.forEach(campo => campo.disabled = true);
                botonActualizar.classList.add("d-none");
                botonCancelar.classList.add("d-none");
                botonEditar.classList.remove("d-none");
            } else {
                alert("Error: " + response.message);
            }
        });
    }

    // Lógica del botón Eliminar
    if (botonEliminar) {
        botonEliminar.addEventListener("click", async function() {
            const verificado = confirm("¿Estás seguro de que deseas eliminar este cliente? (No se borrarán sus ventas históricas).");
            if (verificado) {
                const response = await clientService.delete(idCliente);
                if (response.success) {
                    window.location.href = window.APP_URL + 'client';
                } else {
                    alert("Error: " + response.message);
                }
            }
        });
    }
});