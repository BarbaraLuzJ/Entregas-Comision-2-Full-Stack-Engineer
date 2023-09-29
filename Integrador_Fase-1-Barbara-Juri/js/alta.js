/* ---------------------------------------------------------- */
/*                     variables Globales                     */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/*                     funciones Globales                     */
/* ---------------------------------------------------------- */
function agregar(e) {
    e.preventDefault()

    //console.log('agregar()')

    var refNombre = document.getElementById('nombre')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refMarca = document.getElementById('marca')
    var refCategoria = document.getElementById('categoria')
    var refSubCat = document.getElementById('subcategoria')
    var refFoto = document.getElementById('foto')
    var refEnvio = document.getElementById('envio')

    var nombre = refNombre.value
    var precio = refPrecio.value
    var stock = refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var subcategoria = refDetalles.value
    var foto = refFoto.value
    var envio = refEnvio.checked

    //console.log(nombre, precio, stock, envio)
    productos.push({
        nombre : nombre,
        precio : precio,
        stock : stock,
        marca : marca,
        categoria : categoria,
        subcategoria : subcategoria,
        foto : foto,
        envio : envio
    })

    //console.log(productos)

    representarTablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refSubCat.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}

function representarTablaProductos() {
    
    var filasTabla = '<tr>' +
                        '<th>nombre</th>' +
                        '<th>precio</th>' +
                        '<th>stock</th>' +
                        '<th>marca</th>' +
                        '<th>categoría</th>' +
                        '<th>subcategoria</th>' +
                        '<th>foto</th>' +
                        '<th>envío</th>' +
                    '</tr>'

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            filasTabla += 
                '<tr>' +
                    '<td>'+ productos[i].nombre  +'</td>' +
                    '<td> $'+ productos[i].precio +'</td>' +
                    '<td> '+ productos[i].stock +'</td>' +
                    '<td> '+ productos[i].marca +'</td>' +
                    '<td> '+ productos[i].categoria +'</td>' +
                    '<td> '+ productos[i].subcategoria  +'</td>' +
                    '<td><img width="50" src="' + productos[i].foto + '" alt="foto de '+productos[i].nombre+'"></td>' +
                    '<td>'+ (productos[i].envio? 'Si':'No') +'</td>' +
                '</tr>'
        }
    }
    else filasTabla = '<h2>No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarTablaProductos()
}
