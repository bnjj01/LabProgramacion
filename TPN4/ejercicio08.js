let productos = [
    {
        "nombre" : "Esponja",
        "precio":20.50
    },
    {
        "nombre" : "Mate",
        "precio" : 40.60
    },
    {
        "nombre" : "Termo",
        "precio":60.50
    },
    {
        "nombre" : "Bombilla",
        "precio" : 4.60
    },
    {
        "nombre" : "Yerba",
        "precio":2.50
    },
    {
        "nombre" : "Yerbero",
        "precio" : 30.00
    }
];
function mostrarProductos(){
    for ( producto of productos ){
        console.log(producto);
    }
}
function motrarMasCaro(){
    let productoMasCaro = productos.reduce((acumulador,item) => {
        if(item.precio > acumulador.precio){
            return item;
        }
        else{
            return acumulador;
        }
    });
    console.log(productoMasCaro);
}
function mostrarNombre(){
    let nombresProductos = productos.map(item => item.nombre);
    console.log(nombresProductos);
}

// mostrarNombre();

// motrarMasCaro();

// mostrarProductos();