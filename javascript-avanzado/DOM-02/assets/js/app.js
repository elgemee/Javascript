/*https://lenguajejs.com/javascript/dom/crear-elementos-dom/*/
/* let titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde Javascript'
// textcontent accede al texto de la etiqueta
// el signo de $ se usa para indicar que una variable guarda algún elemento del dom, o de HTML en sí

// $referecia del dom, o javascript sin el $
*/
//p, clase= .nombre, id= #nombre, etiqueta
let $titulo = document.querySelector('#titulo')
$titulo. textContent = 'TITULO ESCRITO DESDE JS';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos= document.querySelectorAll('p');
console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3'); //aNo se muestra pero esta en memoria
subtitulo.textContent = 'Este es un subtitulo desde JS'
// document.body.append agrega un elemento dentro de body al final
$titulo.insertAdjacentElement("afterend",subtitulo);//se coloca a lado del elemento
$titulo.remove();


let $contenido = document.querySelector('#contenido');

//console.log($contenido.textContent = '<br>'); //puro texto
//console.log($contenido.innerHTML = '<br>'); //permite escribir codigo html 
//console.log($contenido.outerHTML ='hola');
//inner, modifico el contenido, con outer modifico todo el contenido, desaparace el Div

let contenidoparrafo = document.createElement('p');
contenidoparrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoparrafo); //appendChild hace una insercion

/*
beforebegin: El elemento se inserta antes de la etiqueta HTML de apertura.
afterbegin: El elemento se inserta dentro de la etiqueta HTML, antes de su primer hijo.
beforeend: El elemento se inserta dentro de la etiqueta HTML, después de su último hijo. Es el equivalente a usar el método .appendChild().
afterend: El elemento se inserta después de la etiqueta HTML de cierre.
*/

