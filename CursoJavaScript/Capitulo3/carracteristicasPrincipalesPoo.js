//asi se declara una clase
class animal{
    //constructor
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}.`;
    }

    //asi se declara un metodo
    verInformacion(){
        document.write(this.informacion);
    }


}
//instanciar objeto
let perro = new animal("Dalmata", 5, "blanco");
//llamada a metodos
perro.verInformacion();
/*
console.log(perro)
console.log(perro.color)
console.log(perro.especie)
console.log(perro.edad)
document.write(perro.informacion);
*/