/* Codigo sincrono */

let variableSincrona;
variableSincrona = 10*3;
console.log(variableSincrona);

/* Código asincrono */
let variableAsincrona;

setTimeout(() => { //despues de un tiempo haz esto
    variableAsincrona = 10*3; //2000 milisegundos
    console.log(variableAsincrona);

}, 2000);
console.log(variableAsincrona);


// fech hacemos una peticion y esperamos la respuesta del servidor, asincrono