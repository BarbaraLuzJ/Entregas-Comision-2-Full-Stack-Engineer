import fs from 'fs/promises';

const archivo = './package.json';
const archivoTXT = './info.txt';


async function leerYEscribirInfo(nombre, nuevoArchivo) {
    try {
        const leerArchivo = await fs.readFile(nombre, 'utf-8');
        const archivoObjeto = JSON.parse(leerArchivo);
        const archivoSize = Buffer.from(leerArchivo).length;

        const info = {
        contenidoStr: leerArchivo,
        contenidoObj: archivoObjeto,
        size: archivoSize
        };

        console.log(info);

        await fs.writeFile(nuevoArchivo, JSON.stringify(info, null, '\t'));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

leerYEscribirInfo(archivo, './info.txt');
