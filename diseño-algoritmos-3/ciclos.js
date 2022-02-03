/*

Ciclos - Bucles - Loops
while- 
do while
for

//---------------------------while--------------------------------------
/*
let condicion= 1; = valor inicial
while(condicion){
    tu codigo
    modificacion a nuetro valor inicial
}
*/
// imprimir todos los numeros del 1 -- 10

/*

let condicion = 1; 
while(condicion <=10){
    console.log(condicion);
  //  condicion = condicion + 1;
    condicion++;

}


let numero = 1;
numero++; //2 Equivale a= numero= numero + 1
numero++; //3
numero++; //4
numero--; //3
numero--; //2
numero--; //1
console.log(numero);

*/ //18---38


//------------------------ do while-------------------------------
/*
imprimir los numeros del 1 --> 10

Diferencia con while y do while, es que Do while se ejecuta por lo menos 
1 vez
DO WHILE--- primero pega y luego pregunta
*/
/*
let numero = 1; 

do {
    console.log(numero);
    numero++;
} while(numero <=10);

*/

//-------------------------for------------------------------------

//Utiliza contador
//si o si debe llevar: ;
// primero comprueba y luego ejecuta
/*

for( let control = 1;control <=10; control++){
console.log(control);

}
*/

const comidas=['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for(let i= 2; i < comidas.length; i++) {
console.log(comidas[i]);

}
