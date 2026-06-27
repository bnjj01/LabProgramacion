import itemService from "./service.js";

const itemController ={
    load(id) {
        const item = itemService.load(id);
        if (item) {
            document.getElementById('codigo').value = item.codigo || "";
            document.getElementById('nombre').value = item.nombre || "";
            document.getElementById('categoria').value = item.categoria || "";
            document.getElementById('precio').value = item.precio || "";
            document.getElementById('stock').value = item.stock || "";

            const inputDescripcion = document.getElementById('descripcion')
            if(inputDescripcion){
                inputDescripcion.value = item.descripcion || '';
            }

            console.log("Producto cargado en el formulario:", item);

            const inputId = document.getElementById('item-id');
            if(inputId){
                inputId.value = item.id;
            }

        } else {
            console.error("Producto no encontrado con ID:", id);
        }
    },
    save() {
        const nuevoProducto = {
            codigo: document.getElementById('codigo').value,
            nombre: document.getElementById('nombre').value,
            categoria: document.getElementById('categoria').value,
            precio: document.getElementById('precio').value,
            stock: document.getElementById('stock').value,
        };

        const productoGuardado = itemService.save(nuevoProducto);

        this.resetForm();
    },

    update() {
        const productoModificado = {
            id: parseInt(document.getElementById('item-id').value),
            codigo: document.getElementById('codigo').value,
            nombre: document.getElementById('nombre').value,
            categoria: document.getElementById('categoria').value,
            precio: document.getElementById('precio').value,
            stock: document.getElementById('stock').value,
        };

        const exito = itemService.update(productoModificado);
        
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
        const verificado = confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (verificado) {
            const item = itemService.load(id);
            const eliminado = itemService.delete(id);

            if (eliminado) {
                const contenedor = document.querySelector('main.container');
                alert("Producto eliminado correctamente.");
                this.list();

                    if (contenedor && item){
                        contenedor.innerHTML = `
                            <div class="alert alert-danger text-center mt-5">
                                <h4>Producto Eliminado</h4>
                                <p>Se ha eliminado correctamente el producto <strong>${item.nombre}</strong> (Producto: ${item.cuenta}).</p>
                                <hr>
                                <a href="index.html" class="btn btn-primary mt-3">Volver al listado de usuarios</a>
                            </div>
                        `
                    }
            }
        }
    },

    list() {
        const items = itemService.list();
        const tbody = document.querySelector('#tabla-items tbody');
        
        if (!tbody) return;

        tbody.innerHTML = '';

        if (items.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="text-center">No hay productps en el inventario</td></tr>`;
            return;
        }

        items.forEach(item => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${item.codigo || ''}</td>
                <td>${item.nombre || ''}</td>
                <td>${item.categoria || ''}</td>
                <td>${item.precio || 0}</td>
                <td>${item.stock || 0}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="location.href='edit.html?id=${item.id}'">Editar</button>
                </td>
            `;
            tbody.appendChild(fila);
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

export default itemController;