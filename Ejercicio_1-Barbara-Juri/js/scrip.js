/* --------------------------------------------------- */
/*                    Variables                       */
/*-------------------------------------------------  */

var main = document.querySelector('main');
var h2 = document.querySelectorAll('h2')[1];
var botonAtras = document.querySelectorAll('button')[0];
var botonSiguiente = document.querySelectorAll('button')[1];

var agregar = document.createElement('button');
agregar.innerText = "Agregar color";
agregar.id = 'agregar'
document.body.appendChild(agregar)

const colores = ['red', 'green', 'blue', 'black'];
var contador = 0;


/* --------------------------------------------------- */
/*                   Funciones                        */
/*-------------------------------------------------  */
const colorFondo = (listaColores, elemento) => {
    let color = listaColores[contador]
    elemento.innerHTML = color.toUpperCase();
    elemento.style.color = 'white';
    main.style.backgroundColor = color;
}
const acumulador = (listaColores, variable) => {
    contador += variable
    if (contador < 0) {
        contador = listaColores.length - 1;
    } else if (contador >= listaColores.length) {
        contador = 0;
    }
};
const agregarColor = (listaColores) => {
    nuevo = prompt('Ingrese nuevo color:');
    nuevoColor =nuevo.toLowerCase();
    listaColores.push(nuevoColor);
}

/* --------------------------------------------------- */
/*                    Ejecución                       */
/*-------------------------------------------------  */
colorFondo (colores, h2);

botonSiguiente.addEventListener('click', () =>{
    acumulador (colores, 1)
    colorFondo (colores, h2);
})

botonAtras.addEventListener('click', () =>{
    acumulador (colores, -1);
    colorFondo (colores, h2);
})

agregar.addEventListener('click', function (){
    agregarColor(colores)
})







