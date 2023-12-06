import fs from 'fs/promises';


const archivo = 'package.json';
const archivoTXT = './info.txt';


const leerYEscribirInfo = (nombre, nuevoArchivo) => {
    fs.readFile(nombre, 'utf-8')
        .then((leerArchivo) => {
            const archivoObjeto = JSON.parse(leerArchivo);
            const archivoSize = Buffer.from(leerArchivo).length;

            const info = {
            contenidoStr: leerArchivo,
            contenidoObj: archivoObjeto,
            size: archivoSize
        };

        console.log(info);

        return fs.writeFile(nuevoArchivo, JSON.stringify(info, null, '\t'));
    })
    .catch((error) => {
        console.error('Error:', error.message);
});
}

leerYEscribirInfo(archivo, archivoTXT)
