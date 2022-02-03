class Pokemon {
    constructor(nombre, tipo){
        this.nombre= nombre;
        this.tipo= tipo;
    }
    // metodos
    atacar(){
        return console.log(`${this.nombre} está atacando`)
    }
    
}

class Picachu extends Pokemon {
    constructor(nombre, tipo, edad){
        super(nombre, tipo);//referencia al constructor padre
        this.edad= edad;
    }
    // metodos
    evolucionar(){
        
    return console.log(`${this.nombre} está evolucionando`)
    
}
}

class Electrico extends Picachu{
    constructor(nombre, tipo, edad, color){
    super (nombre, tipo, edad);
    this.color=color;
}

        
}

const Electrico1 = new Electrico("bill", "veneno", "4", "morado")
console.log(Electrico1);

const Picachu1 = new Picachu("Juan", "Electrico", "3"); // Pertenece a la clase picachu
console.log(Picachu1);

Picachu1.atacar ();
Picachu1.evolucionar();

const Pokemon1 = new Pokemon("Charmander", "Fuego");//pertenece a la clase Pokemon
Pokemon1.atacar();
