import CnxMongoDB from "../../DBMongo.js";

class ModelMongoDB {

    obtenerPalabras = async () => {
        if(!CnxMongoDB.connection) return []
        const palabras = await CnxMongoDB.db.collection('palabras').find({}).toArray();
        const palabrasExtraidas = JSON.stringify(palabras.map(objeto => objeto.palabra));
        return palabrasExtraidas.replace(/["\\[\]]/g, '').split(',').join(' ');
    }

    guardarPalabra = async palabra => {
        if(!CnxMongoDB.connection) return {};
        palabra.timestamp = new Date().getTime();
        await CnxMongoDB.db.collection('palabras').insertOne(palabra);
        return palabra;
    }

}

export default ModelMongoDB;