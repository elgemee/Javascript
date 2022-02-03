/* 
coleccion de elementos
tienen metodos o funciones que nos permiten ordenar o manipular los datos almacenados


*/

//manera 1
const arreglo1 = [];
console.log (arreglo1);

//manera 2
const arreglo2= Array.of(1, true, 'adios');
console.log(arreglo2);

//manera 3
const arreglo3 = new Array(3, true, 'adios');

let variable1= 3;
console.log(variable1);

const frutas =[ 'manzanas','naranjas', 'uvas', 'sandias', [1,2,3,4,5,['A','B','C']] ];
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas [3]);
console.log(frutas[4]);
console.log(frutas[4][4]); //numero5
//mostrar la letra b
console.log(frutas [4][5][1]);

//metodos
/* length = longitud */
const letras= ['A', 'B', 'C', 'D'];
console.log(letras.length);

/*push = añade un elemento al final de nuestro arreglo*/
letras.push('E');
console.log(letras);

/* pop= elimina el ultimo elemento */
letras.pop();
console.log(letras);

/*unshift = agrega elemento al inicio del arreglo */
letras.unshift(1);
console.log(letras);

/* shift = elimina el elemento al inicio del arreglo*/
letras.shift();
console.log(letras);
