console.log("Ejercicio 'a'")

cantidadDeGatos = parseInt(prompt('Ingrese un numero de gatos: '));
var gatos= '';
    for(i = 1; i <= cantidadDeGatos; i++) {
        gatos = (i %3 === 1? 'Gato #' + i + '😺': i %3 === 0? 'Gato #' + i +'😹':'Gato #' + i +'😸');
        console.log(gatos)
}  


