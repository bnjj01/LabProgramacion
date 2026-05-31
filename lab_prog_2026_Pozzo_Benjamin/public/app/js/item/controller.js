import userService from "./service.js";

const userController ={
    load(id) {
        const user = userService.load(id);
        if (user) {
            document.getElementById('apellido').value = user.apellido;
            document.getElementById('nombre').value = user.nombre;
            document.getElementById('perfil').value = user.perfil;
            document.getElementById('correo').value = user.correo;
            console.log("Usuario cargado en el formulario:", user);

            const inputId = document.getElementById('user-id');
            if(inputId){
                inputId.value = user.id;
            }

        } else {
            console.error("Usuario no encontrado con ID:", id);
        }
    },
    save() {
        const nuevoUsuario = {
            apellido: document.getElementById('apellido').value,
            nombre: document.getElementById('nombre').value,
            cuenta: document.getElementById('cuenta').value,
            perfil: document.getElementById('perfil').value,
            correo: document.getElementById('correo').value,
            clave: document.getElementById('clave').value,
            confirmarClave: document.getElementById('confirmarClave').value
        };

        const usuarioGuardado = userService.save(nuevoUsuario);

        this.resetForm();
        alert("Registro creado con éxito.");
    },

    update() {
        const clave = document.getElementById('clave').value;
        const confirmarClave = document.getElementById('confirmarClave').value;

        if(clave !== confirmarClave){
            alert('Erro: Las contraseñas no coinciden. Por favor verifíquelas.');
            return false;
        }

        const usuarioModificado = {
            id: parseInt(document.getElementById('user-id').value),
            apellido: document.getElementById('apellido').value,
            nombre: document.getElementById('nombre').value,
            perfil: document.getElementById('perfil').value,
            correo: document.getElementById('correo').value,
            cuenta: document.getElementById('cuenta').value,
            clave: clave,
            confirmarClave: confirmarClave
        };

        const exito = userService.update(usuarioModificado);
        
        if (exito) {
            this.enableForm(false);
            alert("Registro actualizado.");
            return true;
        } else {
            alert("Error: No se pudo actualizar el registro.");
            return false;
        }
    },

    delete(id) {
        const verificado = confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (verificado) {
            const user = userService.load(id);
            const eliminado = userService.delete(id);

            if (eliminado) {
                const contenedor = document.querySelector('main.container');
                alert("Usuario eliminado correctamente.");
                this.list();

                    if (contenedor && user){
                        contenedor.innerHTML = `
                            <div class="alert alert-danger text-center mt-5">
                                <h4>Cuenta Eliminada</h4>
                                <p>Se ha eliminado correctamente al usuario <strong>${user.nombre}</strong> (Cuenta: ${user.cuenta}).</p>
                                <hr>
                                <a href="index.html" class="btn btn-primary mt-3">Volver al listado de usuarios</a>
                            </div>
                        `
                    }
            }
        }
    },

    list() {
        const usuarios = userService.list();
        const tabla = document.getElementById('tablaUsuarios');
        
        if (!tabla) return;

        tabla.innerHTML = '';

        if (usuarios.length === 0) {
            tabla.innerHTML = `<tr><td colspan="5" class="text-center">No hay registros disponibles</td></tr>`;
            return;
        }

        usuarios.forEach(user => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${user.cuenta || ''}</td>
                <td>${user.nombre || ''}</td>
                <td>${user.perfil || ''}</td>
                <td>${user.correo || ''}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="location.href='edit.html?id=${user.id}'">Editar</button>
                </td>
            `;
            tabla.appendChild(fila);
        });
    },

    exportToPDF() { // 
        console.log("Exportando el listado a formato PDF...");

        window.print();
    },

    resetForm() { // 
        const formulario = document.querySelector('form');
        if (formulario) {
            formulario.reset();
        }
    },

    enableForm(estado) { 
        const controles = document.querySelectorAll('form input, form select, form textarea, form button[type="submit"]');
        controles.forEach(control => {
            control.disabled = !estado;
        });
    }
};

export default userController;