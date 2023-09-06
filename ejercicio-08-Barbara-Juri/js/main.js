window.onload = function() {

    console.log('Contenido del DOM cargado')

    var textArea = document.querySelector('#origen');
    var div = document.querySelector('#destino');
    var inputBoton = document.querySelectorAll('input');
    var botConvMin = document.querySelector('button');
    var listado = document.querySelectorAll('li')

    var botonReemplazar = inputBoton[0];
    var botAgregar = inputBoton[1];
    var botAgregar5 = inputBoton[2];
    var botAgregar10 = inputBoton[3];
    var botAgregarN = inputBoton[4];
    var botVaciar = inputBoton[5];
    var botconvMay = inputBoton[6];
    var contenido ='';
    

    textArea.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

    
    textArea.oninput = function() {
        inputBoton.forEach(function(button) {
            button.disabled = false;
        });
        botConvMin.disabled = false;
    };

    botonReemplazar.onclick = function() {
        contenido = textArea.value;
        div.innerText = contenido;
        textArea.value = '';
    }

    botAgregar.onclick = function() {
        contenido = textArea.value;
        div.innerText += ' ' + contenido + ' ';
        textArea.value = '';
    }

    botAgregar5.onclick = function() {
        contenido = textArea.value;
        div.innerText += ' ' + (contenido + ' ').repeat(5);
        textArea.value = '';
    }

    botAgregar10.onclick = function() {
        contenido = textArea.value;
        div.innerText += ' ' + (contenido + ' ').repeat(10);
        textArea.value = '';
    }

    botAgregarN.onclick = function(N) {
        do {
            N = parseInt(prompt('Ingrese cuantas veces desea agregar el contenido: '))
        }while(!N || N<=0)
        contenido = textArea.value;
        div.innerText += ' ' + (contenido + ' ').repeat(N);
        textArea.value = '';
    }
    botVaciar.onclick = function() {
        div.innerText = '';
    }
    botconvMay.onclick = function() {
        div.innerText = (div.textContent).toUpperCase();
    }
    botConvMin.onclick = function() {
        div.innerText = (div.textContent).toLowerCase();
    }
    listado.forEach(function(li) {
        li.innerText ='Ok' + li.textContent
    });

}
