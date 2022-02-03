class Animalito {
    constructor (nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad; 
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;
    
    }

    saludar(){
        return console.log (`Hola mi nombre es ${this.nombre}`)
    }
}

class Veterinario {
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente)
        this.cantidadPacientes  +=1;
        //this.cantidadPacientes++;
        let mensaje = `Paciente agregado<br>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

        revisarPaciente(paciente){
            if(paciente.revisado ===false){
                paciente.revisado= true;
                this.modificarPacientesRevisados ++;
                document.write('Paciente ha sido revisado: ');
            } else {
                document.write(`Este paciente ya fue revisado`);
            }
        }

    mostrarLista (){
        for(let i= 0; i < this.listaPacientes.length;i++){
            document.write(" " + this.listaPacientes[i].nombre)

        }
        document.write (`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br> <br> Pacientes revisados: ${this.pacientesRevisados}<br>`);
    }

}

const VeterinariaPanchito = new Veterinario();


//objetos creados de la clase animalito
const Animalito1 = new Animalito('Manchas', '5', 'Perro', false)//objeto 1
const Animalito2 = new Animalito('Galleta', '2', 'Gato', true) //objeto 2
console.log(Animalito1);
console.log(Animalito2);




VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);



console.log(VeterinariaPanchito.listaPacientes);


VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();


VeterinariaPanchito.revisarPaciente(Animalito2);

// operador de cortocircuito
// let variable = 0;
// console.log()