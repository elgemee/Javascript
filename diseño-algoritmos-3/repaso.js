/* ARREGLOS */

const comidas =['Pozole','Quesadillas','Tacos'];
console.log (comidas.length);

/*
push - Agrega al final
pop  - Quita el elemento del final
unshift - Agrega al inicio
shift   Quita el elemento del final
*/

comidas.push('Tortas');
console.log(comidas);

comidas.unshift('Pancita');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

/*
forEach- Nos puede servir para realizar una accion 
por cada elemento de nuestro arreglo
*/

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function(el){
    console.log(el);
})

const numeros= [1, 4, 7, 8];
console.log(numeros);

numeros.forEach(function (el){

   let suma=  el + 1;
   console.log(suma);
})

/* Ejercicio */

const arr=[];

function suma(num){
    let sumnum = num + 1;
    return arr.unshift(sumnum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(79);


console.log(arr);
