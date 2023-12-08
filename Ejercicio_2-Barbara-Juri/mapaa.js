import fs from 'fs';

const archivo = './package.json';
const archivoTXT = './info.txt';


async function leerYEscribirInfo(nombre, nuevoArchivo) {
    try {
        const leerArchivo = await fs.promises.readFile(nombre, 'utf-8');
        const archivoObjeto = JSON.parse(leerArchivo);
        const archivoSize = Buffer.from(leerArchivo).length;

        const info = {
        contenidoStr: leerArchivo,
        contenidoObj: archivoObjeto,
        size: archivoSize
        };

        console.log(info);

        await fs.promises.writeFile(nuevoArchivo, JSON.stringify(info, null, '\t'));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

leerYEscribirInfo(archivo, './info.txt');
