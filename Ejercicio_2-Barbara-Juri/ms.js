import fs from 'fs';

const archivo = 'package.json';
const archivoTXT = './info.txt';

const leerYEscribirInfo = (nombre, nuevoArchivo) => {
    try {

        const leerArchivo = fs.readFileSync(nombre, 'utf-8');
        console.log('tipo', typeof leerArchivo);
        const archivoObjeto = JSON.parse(leerArchivo);
    
        const archivoSize = Buffer.from(leerArchivo).length;
    
        const info = {
            contenidoStr: leerArchivo,
            contenidoObj: archivoObjeto,
            size: archivoSize,
        };
    
        console.log(info);
    
        fs.writeFileSync(nuevoArchivo, JSON.stringify(info, null, '\t'));

    } catch (error) {
        console.error('Error:', error.message);
    };
}

leerYEscribirInfo(archivo, archivoTXT);

