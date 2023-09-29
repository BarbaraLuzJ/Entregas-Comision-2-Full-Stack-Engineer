function start() {
    console.warn( document.querySelector('title').innerText )
}
/* ---------------------------------------------------------- */
/*                     Variables Globales                     */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */

function representarCardsProductos() {
    
    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += 
                '<section>' +
                    '<h3>'+ productos[i].nombre  +'</h3>' +
                    '<img src="' + productos[i].foto + '" alt="">' +
                    '<p><b class="precio">Precio:</b> $'+ productos[i].precio +'</p>' +
                    '<p><b>Stock:</b> '+ productos[i].stock +'</p>' +
                    '<p><b>Marca:</b> '+ productos[i].marca +'</p>' +
                    '<p><b>Categoría:</b> '+ productos[i].categoria +'</p>' +
                    '<p><b>Subcategoría:</b> '+ productos[i].subcategoria +'</p>' +
                    '<p><b style="color:gold;">Envío:</b> '+ (productos[i].envio? 'Si':'No') +'</p>' +
                '</section>'
        }
    }
    else cards += '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('.cards-container').innerHTML = cards
}

function representarCardsProductos2() {
    for(var i=0; i<productos.length; i++) {
        document.querySelector('.cards-container').innerHTML += 
            '<section>' +
                '<h3>'+ productos[i].nombre  +'</h3>' +
                '<img src="' + productos[i].foto + '" alt="">' +
                '<p><b>Precio:</b> $'+ productos[i].precio +'</p>' +
                '<p><b>Stock:</b> '+ productos[i].stock +'</p>' +
                '<p><b>Marca:</b> '+ productos[i].marca +'</p>' +
                '<p><b>Categoría:</b> '+ productos[i].categoria +'</p>' +
                '<p><b>Subcategoria :</b> '+ productos[i].subcategoria +'</p>' +
                '<p><b>Envío:</b> '+ (productos[i].envio? 'Si':'No') +'</p>' +
            '</section>'
    }
}


function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()
}
