import itemController from "./controller.js";

document.addEventListener("DOMContentLoaded", function(){

    itemController.list();

    const botonExportar = document.getElementById('btn-exportar');

    if (botonExportar){
        botonExportar.addEventListener('click', function(evento){
                evento.preventDefault();

                userController.exportToPDF();
        })
    }
})