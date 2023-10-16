/* ------------------------------------------- */
/*                   Variables                 */
/* ------------------------------------------- */

const drop1 = document.querySelectorAll('div')[0];
const drop2 = document.querySelectorAll('div')[1];
const drop3 = document.querySelectorAll('div')[2];
const zona1 = document.getElementById('zona1');
const zona2 = document.getElementById('zona2');
const zona3 = document.getElementById('zona3');

/* ------------------------------------------- */
/*                   Funciones                 */
/* ------------------------------------------- */

function cargarImagen(imagen, drop) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', imagen +'?'+ Date.now())
    xhr.responseType = 'blob';
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let imagenBlob = xhr.response;
            const url = URL.createObjectURL(imagenBlob);
            drop.innerHTML = '<img src="' + url + '" alt="">';
        }
    })
    xhr.send();
};

function cargarFile (zonas, drop) {
    zonas.addEventListener('change', () => {
        const imagen = zonas.files[0].name;
        cargarImagen(imagen, drop);
    drop.addEventListener('click', () => {
        zonas.click();
    })
    })
};

function dropImage (drop) {
    drop.addEventListener('drop', e => {
        e.preventDefault();   
        const imagen = e.dataTransfer.files[0].name;
        cargarImagen(imagen, drop);
    })
};

/* ------------------------------------------- */
/*                   Ejecucion                 */
/* ------------------------------------------- */

;['dragenter','dragleave','dragover', 'drop'].forEach(event => {
    document.addEventListener(event, e => e.preventDefault())
});



dropImage (drop1);
dropImage (drop2);
dropImage (drop3);


cargarFile (zona1, drop1);
cargarFile (zona2, drop2);
cargarFile (zona3, drop3);