/* funcion*
Es un bloque de codigo reutlizable
Puede tener o no parametros de entrada.
Puede devolver o no un valor */

function sumar(numero1, numero2) {
    // Operaciones o Codigo a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la funcion');
}

function restar(numero1, numero2) {
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);   
}

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar(numero1, numero2);

//template string
// backstick o comilla invertida permite conbinar texto con Javascript
document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`); 
restar (numero1,numero2);
document.write ('La suma de' + numero1 + ' y ' + numero2 + ' es ' + suma);

