/* ----------------------------------------------------- */
/*                       Variables                      */
/* --------------------------------------------------- */

const pesos = document.querySelectorAll('input')[0];
const dolar = document.querySelectorAll('input')[1];
const actualizacion = document.querySelectorAll('input')[2];
const resultado = document.querySelectorAll('span')[2];
const fecha = document.querySelectorAll('span')[0];
let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';





/* ----------------------------------------------------- */
/*                      Funciones                       */
/* --------------------------------------------------- */
const dolarOficial = (url, method) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            respuesta = JSON.parse(xhr.response);
            cotizacion = respuesta[1].casa.venta;
            dolar.value = parseFloat(cotizacion).toFixed(2);
        }
    })
    xhr.send()
    }

const conversorDolar = () => {
        pesosIngresados = pesos.value;
        dolarHoy = dolar.value
        cambio = pesosIngresados / dolarHoy;
        resultado.innerText = cambio.toFixed(2);
        }


const actualizar = () => {
    setInterval (() =>{
        if(actualizacion.checked){
            fecha.innerText = new Date;
            dolarOficial(url, 'get');}
        else {fecha.innerText = ''}
}, 2000)
}


/* ----------------------------------------------------- */
/*                      Ejecucion                       */
/* --------------------------------------------------- */

pesos.addEventListener('input', conversorDolar)
dolar.addEventListener('input', conversorDolar)
    
actualizacion.addEventListener('change', () => {
    actualizar()
})

actualizar ()
dolarOficial(url, 'get')


