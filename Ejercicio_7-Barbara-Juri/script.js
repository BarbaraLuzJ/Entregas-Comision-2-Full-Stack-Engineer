
var gatito1 = document.getElementById('btn-1');
gatito1.onclick = function() {
agregarGato('😺');
};

var gatito2 = document.getElementById('btn-2');
gatito2.onclick = function() {
agregarGato('😸');
};

var gatito3 = document.getElementById('btn-3');
gatito3.onclick = function() {
agregarGato('😹');
};

var contadorGatos = 0;
var ultimoGato = '';
cajas = ''

function agregarGato(gato) {
    var pantalla = document.getElementById('pantalla');

    if (gato === ultimoGato) {
        contadorGatos++;
        if (contadorGatos > 5) {
            cajas += '⬛'
            pantalla.innerText = cajas;
            contadorGatos = 0;
        } else {
            pantalla.innerText += gato;
    }
    } else {
        contadorGatos = 1;
        ultimoGato = gato;
        pantalla.innerText += gato;
}
}





