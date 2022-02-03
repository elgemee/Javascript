/* Arrow function
Funcion de flecha
*/

// function sumar(numero1,numero2) {
//     return numero1 + numero2;

// }
/* Funcion de flecha
Es un bloque de codigo reutilizable
Puede tener o no parametros de entrada.
Puede devolver o no un valor
no se puede llamar sin antes de ser declarada
*/

const sumar = (numero1, numero2)  => {
    return numero1 + numero2;

}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`); 