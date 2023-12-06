import fs from 'fs';

const archivo = 'package.json';
const archivoTXT = './info.txt';

const leerYEscribirInfo = (nombre, nuevoArchivo) => {
    fs.readFile(nombre, 'utf-8', (err, leerArchivo) => {
        if (err) {
            console.error('Error:', err.message);
            return;
        }
    
        const archivoObjeto = JSON.parse(leerArchivo);
        const archivoSize = Buffer.from(leerArchivo).length;
    
        const info = {
            contenidoStr: leerArchivo,
            contenidoObj: archivoObjeto,
            size: archivoSize
        };
    
        console.log(info);
    
        fs.writeFile(nuevoArchivo, JSON.stringify(info, null, '\t'), (err) => {
            if (err) {
            console.error('Error:', err.message);
            }
        });
    });
    
}
leerYEscribirInfo(archivo, archivoTXT);