let numeros = [1, 3, 13, 23, 532, 328, 123, 6584, 812, 213, 123]

//function funcion anonima
numeros.forEach(function(elemento) {
    document.write(elemento + '<br> '  );
});
//es lo mismo que el de arriba
numeros.forEach(elemento => {
    document.write(elemento + ', '  );
});

// forEach, no necesitamos un contador, recorre todos los elementos que tenga

/* El método forEach() ejecuta la función indicada una vez por cada elemento del array. Este método puede ayudarte a recorrer los elementos de un array.

for (let i = 0; i < numeros.length; i++) {
    document.write (`${numeros[i]}<br>`);
    */

// -------------------Map----------------
/* El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
CREAR UN ARREGLO APARTIR DE OTRO ARREGLO
CREA UN ARREGLO DIFERENTE
map nos sirve si queremos modificar un arreglo, sin afectar el original
*/

let numeros2= numeros.map(function(elemento) {
    return elemento*2;

});
document.write('<br>' + numeros2);


/* let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');
*/

//let frutas = ['mango', 'uva', 'piña'];
//let frutas2 = frutas.map(function(elemento) {
//    return elemento;
//})

// document.write('<br>' + frutas + '<br>');
// document.write('<br>' + frutas2 + '<br>');

// frutas2.push('pera');
// document.write('<br>' + frutas + '<br>');
// document.write('<br>' + frutas2 + '<br>');


/* includes 
El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda. Utiliza el algoritmo sameValueZero para determinar si se encuentra el elemento dado.*/

document.write ('<br>' + numeros.includes('hola') + '<br>')


/* Filter
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
*/
let numerosPares = numeros.filter((elemento) => {
   /* if( elemento % 2 == 0) {
        return true;
    } else {
        return false
    } */
   // console.log( elemento % 2 == 0);
   //  return elemento % 2 == 0; 

    if(elemento >15) {
        return true;
    }
});
document.write ('<br>' + numerosPares + '<br>')

let frutas = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Manzana', 'Aguacate'];
let frutasFiltro = frutas.filter((fruta) => {
    /* if(fruta.includes('man') ==true) {
        return true;
    } */

    // Tolocalelowercase convierte el texto a miniscula y tolocaleuppercase a mayusculas
    return fruta.toLocaleLowerCase().includes('m');
});

document.write('<br>' + frutasFiltro +'<br>')

/* --------Short----------
El método sort() ordena los elementos de un array localmente y devuelve el array. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
*/

let otrosNumeros = [4,6,5,1,9,8,7,2,3]
document.write('<br>' + numeros.sort() + '<br>');

/* Reverse invierte el orden de los elementos de un arreglo*/
document.write('<br>' + numeros.reverse() + '<br>')

/* find obtiene el primer elemento que cumpla una condicion */
let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLocaleLowerCase().includes('ma');
});

document.write ('<br>' + frutaEncontrada + '<br>');