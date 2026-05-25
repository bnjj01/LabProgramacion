class Animal{

    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}.`;
    }

    verInformacion(){
        document.write(this.informacion);
    }
}
//herrencia
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    /*
    //este metodo con la etiqueta static se puede llamar cuando no esta instanciado el objeto. Perro.ladrar().
    static ladrar(){
        alert("WOW!")
    }
    */
    ladrar(){
        alert("WOW!")
    }

    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}
//los objetos se instancian con const
const miPichichu = new Perro("perro",5,"negro","doberman");
miPichichu.verInformacion();
miPichichu.ladrar();

miPichichu.setRaza = "caniche";
document.write(miPichichu.raza);
document.write(miPichichu.getRaza);
