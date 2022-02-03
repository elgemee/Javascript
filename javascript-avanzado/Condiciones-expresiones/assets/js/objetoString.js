let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String("Adiós")//creando un objeto, cadena, Objeto string
console.log(cadena2);



//includes(), busca una cadena en otra y regresa true o false segun exista o no
console.log(cadena2.toLocaleLowerCase(). includes('a'));
//convierte de minusculas a mayusculas
console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toLocaleUpperCase ());

//Es indiferente usar String como dato primitivo y un String como objeto.

//Cohersion y conversión

//Cohersion --> Javascript convierte en automatico un tipo de dato en otro
console.log(cadena1.toLocaleLowerCase());

/* función que recibe una palabra y la regresa pero invertida*/

let palabra = 'Hola Mundo'
let arreglo = palabra.split("");
console.log(arreglo);
console.log(arreglo.reverse().join(''));

function invertirpalabra(cadena){
    let arreglo = cadena.split(''); // convirtiendo la cadena en un arreglo
    arreglo.reverse();//invirtiendo el arreglo
    let cadenainvertida = arreglo.join('');//Une los elementos de un arreglo y regresa un string
    return console.log(cadenainvertida);

}
invertirpalabra('Generation')

let word =prompt('Escribe una palabra');
let arreglo2= word.split('');


document.write(arreglo2.reverse().join(''));