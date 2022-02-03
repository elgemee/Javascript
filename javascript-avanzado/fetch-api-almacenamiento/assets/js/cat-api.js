let $btgato = document.querySelector('#btngato');

$btgato.addEventListener('click', () => {
    
/*
//recibo una propuesto, la proceso como json y despues como promesa
fetch('https://api.thecatapi.com/v1/images/search').then(resp => resp.json()).then(data => {
    console.log(data);

    let imagengatito = document.createElement('img')//creando una etiqueta img
    imagengatito.src = data[0].url;
    document.body.appendChild(imagengatito);
})
    

}); */


fetch('https://dog.ceo/api/breeds/image/random').then(resp => resp.json()).then(data => {
    console.log(data);

    let imagengatito = document.createElement('img')//creando una etiqueta img
    imagengatito.src = data.message;
    document.body.appendChild(imagengatito);
})
    

});



