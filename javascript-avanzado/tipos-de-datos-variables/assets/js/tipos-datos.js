let nombre = 'Alexis Gonzalez'
let edad = 25;
let tienesTrabajo = false;
let variablenull = null;
let variableUndefined;

console.log(typeof(nombre)); //String o cadenas
console.log(typeof(edad)); // number
console.log(typeof(tienesTrabajo)); //boolean, solo pueden tener 2 valores, true o false
console.log(typeof(variablenull));
console.log(typeof(variableUndefined));

console.log (variablenull ===variableUndefined); //operador estricto ===
console.log('1' === 1); //== compara valor y === tipo de datos

console.log(0 === false);

console.log(typeof(10 + 10)); //number
console.log(typeof('10' +10)); //string
console.log(parseInt('12'));

let numero = 10;
console.log(numero.toString());