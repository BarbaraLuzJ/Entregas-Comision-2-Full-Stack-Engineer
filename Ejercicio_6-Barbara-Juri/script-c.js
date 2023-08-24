
console.log("Ejercicio 'c'")

var cantidadDeGatos = parseInt(prompt('Ingrese un numero de gatos: '));
var cantidadDePasos = parseInt(prompt('Ingrese cantidad de pasos: '));

for(i = 1; i <= cantidadDeGatos; i++) {
    var gatos = (i%2===1? 'Gato #' + i + ': 🐈 ':i%2===0? 'Gato #' + i + ': 🐈‍⬛ ':'');
    var pasos = '🐾'.repeat(cantidadDePasos);
    console.log(gatos + pasos)
}
