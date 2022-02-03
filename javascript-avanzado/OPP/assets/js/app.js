//Clases, molde que nos permite crear objetos
//molde o plano llamado animal
class Animal {
    // constructor es una funcion
    constructor (nombre, especie, habitat){
        //this hace referencia al contexto que se este utilizando
        this.nombre = nombre;
        this.especie = especie;
        this.habitat = habitat;        
    }
    //hacer a un lado-abstraccion

    //Getters y Setters
    // proposito, leer o modificar el atributo
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getEspecie(){
        return this.especie
    }
    set setEspecie (especie){
        this.especie= especie;
    }


    //metodos = funcion, ``= Alt Gr + }
    presentarse (){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre}<br>`);
    }

        cambiarNombre(nuevoNombre) {
            this.nombre = nuevoNombre;
            let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}<br>`
            return mensaje;
        }
    
//------------------ metodos estáticos---------------
//Pertenece solo a la clase y no se hereda a los objetos
//Al ser un método estatico no podemos usarlo desde un objeto.

static saludar (){
    return console.log('Hola, soy un método estático')
}
}
//Animal.presentarse();
//console.log(Animal1.getNombre);
Animal.saludar();




//heredan los atributos y los metodos de la calse que estan utilizando
const Animal1 = new Animal("Scooby", "Perro", "casa");//creando un objeto
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato", "casa")
console.log(Animal2);

const Animal3 = new Animal ();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre("Oddie"));


//Getters y Setters
//get- obtener el valor de una Atributos
//set-fijar o cambiar el valor
//se utilizan como si fueran atributos, sin ().
console.log(Animal1.getNombre);
Animal1.setNombre ='Manchas';
console.log(Animal1.getNombre);
console.log(Animal1);

//crear un objeto a partir de una clase-instanciar