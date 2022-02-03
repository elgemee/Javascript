// Almacenar el año actual en una variable. Pedirle al usuario su edad y calcular su edad.

let edad=document.getElementById("edad");
let yearactual = 2022;
function getInformation () {
    let fechanacimiento = parseInt(prompt('Ingresa tu año de nacimiento'));


edad.textContent = yearactual - fechanacimiento + ' años';
}



