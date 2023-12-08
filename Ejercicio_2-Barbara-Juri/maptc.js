import fs from 'fs';

const archivo = 'package.json';
const archivoTXT = './info.txt';

const leerYEscribirInfo = (nombre, nuevoArchivo) => {
    fs.promises.readFile(nombre, 'utf-8')
        .then((leerArchivo) => {
            const archivoObjeto = JSON.parse(leerArchivo);
            const archivoSize = Buffer.from(leerArchivo).length;

            const info = {
                contenidoStr: leerArchivo,
                contenidoObj: archivoObjeto,
                size: archivoSize
            };

            return info;
        })
        .then(info => {
            console.log(info);
            return info;
        })
        .then(info => {
            return fs.promises.writeFile(nuevoArchivo, JSON.stringify(info, null, '\t'), 'utf-8');
        })
        .then(() => {
            console.log('Archivo creado');
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

leerYEscribirInfo(archivo, archivoTXT);

