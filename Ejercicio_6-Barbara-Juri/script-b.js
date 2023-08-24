
console.log("Ejercicio 'b'")

var cantidadDeGatos = parseInt(prompt('Ingrese un numero de gatos: '));
var cantidadDePasos = parseInt(prompt('Ingrese cantidad de pasos: '));

for(i = 1; i <= cantidadDeGatos; i++) {
    var gato = 'Gato #' + i + ': 🐈 ';
    var pasos = '🐾'.repeat(cantidadDePasos);
    console.log(gato + pasos)
}

