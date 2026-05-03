const formulario = document.getElementById('form-encuesta');
const contenedorResultado = document.getElementById('resultado-container');
const impresionJson = document.getElementById('impresion-json');

function mostrarError(idInput, idMensaje, texto) {
    if(idInput) {
        document.getElementById(idInput).classList.add('input-error');
    }
    const spanError = document.getElementById(idMensaje);
    spanError.textContent = texto;
    spanError.classList.add('activo');
}

function limpiarErrores() {
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.msj-error').forEach(msj => {
        msj.textContent = "";
        msj.classList.remove('activo');
    });
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    limpiarErrores();

    let esValido = true;

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value;
    const satisfaccion = document.getElementById('satisfaccion').value;
    const fecha = document.getElementById('fecha').value;
    const comentarios = document.getElementById('comentarios').value.trim();
    const novedades = document.getElementById('novedades').checked;

    const genero = document.querySelector('input[name="genero"]:checked');
    const recomendar = document.querySelector('input[name="recomendar"]:checked');
    const caracteristicas = document.querySelectorAll('input[name="caracteristicas"]:checked');

    if (nombre === "") {
        mostrarError('nombre', 'err-nombre', 'El nombre es obligatorio.');
        esValido = false;
    }

    if (email === "" || !email.includes("@")) {
        mostrarError('email', 'err-email', 'Ingrese un email válido con @.');
        esValido = false;
    }

    if (edad === "" || isNaN(edad) || edad < 18) {
        mostrarError('edad', 'err-edad', 'Debe ser mayor de 18 años.');
        esValido = false;
    }

    if (!genero) {
        mostrarError('grupo-genero', 'err-genero', 'Seleccione una opción.');
        esValido = false;
    }

    if (satisfaccion === "") {
        mostrarError('satisfaccion', 'err-satisfaccion', 'Seleccione un nivel.');
        esValido = false;
    }

    if (caracteristicas.length === 0) {
        mostrarError('grupo-caracteristicas', 'err-caracteristicas', 'Seleccione al menos una.');
        esValido = false;
    }

    if (fecha === "") {
        mostrarError('fecha', 'err-fecha', 'Indique la fecha.');
        esValido = false;
    }

    if (comentarios === "") {
        mostrarError('comentarios', 'err-comentarios', 'Deje un comentario.');
        esValido = false;
    }

    if (!recomendar) {
        mostrarError('grupo-recomendar', 'err-recomendar', 'Seleccione una opción.');
        esValido = false;
    }

    if (!esValido) {
        return; 
    }

    let arrayCaracteristicas = Array.from(caracteristicas).map(check => check.value);

    const objetoDatos = {
        usuario_nombre: nombre,
        usuario_email: email,
        usuario_edad: parseInt(edad),
        genero: genero.value,
        nivel_satisfaccion: satisfaccion,
        caracteristicas_elegidas: arrayCaracteristicas,
        ultima_conexion: fecha,
        sugerencias: comentarios,
        lo_recomienda: recomendar.value === "Si" ? true : false,
        suscrito_novedades: novedades
    };

    const textoJSON = JSON.stringify(objetoDatos, null, 4);
    
    impresionJson.textContent = textoJSON;
    contenedorResultado.style.display = 'block';
});