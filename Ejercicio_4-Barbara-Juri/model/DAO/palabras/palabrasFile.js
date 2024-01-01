import fs from 'fs';

class ModelFile {

    constructor() {
        this.nombreArchivo = 'palabras.json';
    }

    leerArchivo = async nombre => {
        let palabras = [];
        try {
            palabras = JSON.parse(await fs.promises.readFile(nombre, 'UTF-8'));
        }
        catch {}

        return palabras;
    };

    escribirArchivo = async (nombre, palabras) => {
        await fs.promises.writeFile(nombre, JSON.stringify(palabras, null, '\t'));
    };


    obtenerPalabras = async () => {
        const palabras = await this.leerArchivo(this.nombreArchivo);
        const palabrasExtraidas = JSON.stringify(palabras.map(objeto => objeto.palabra));
        return palabrasExtraidas.replace(/["\\[\]]/g, '').split(',').join(' ');
    };

    guardarPalabra = async palabra => {
        const palabras = await this.leerArchivo(this.nombreArchivo);

        palabra.id = String(parseInt(palabras[palabras.length-1]?.id || 0) + 1);
        palabra.timestamp = new Date().getTime()
        palabras.push(palabra);

        await this.escribirArchivo(this.nombreArchivo, palabras);

        return palabra;
    }
}

export default ModelFile;

