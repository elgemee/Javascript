// let miObjeto = {
//     // pares de clave valor
//   //  clave: 'valor'
//   nombre: 'Alexis'
// };

// let nombre= 'Alexis'
// let edad =31;
// let direccion = 'Nicolas Romero';
// let numero = 12432432;

// console.log (nombre);

let persona = {
    nombre: {
        apellidoPaterno: 'Gonzalez',
        apellidoMaterno: 'Becerril',
        nombre:'Alexis'
    },
    edad:31,

    direccion: {
        ciudad: 'Nicolas Romero',
        estado: 'Edomex',
    }, 
    numero: [
        1232535,
        1224355,
    ] 
};

// // arreglos vs objetos
// // almacenar informacion
// ['valor 1', 'valor 2', 'valor 3'];
// let otroObjeto = {
//     nombre: 'asda',
//     apellidos: 'asadd'
// }

// otroObjeto.nombre;

console.log(persona.nombre.nombre);
console.log(persona.direccion.ciudad);


let balon = {
    marca:  ['nike', 'adidas', 'puma'],

    Color: ['Blanco','azul','rojo', 'negro','amarillo', 'rosa'],
    tamaño: [4,5], 
    precio: 299,

}


    
console.log(balon.marca[2]);
console.log(balon.Color[3]);