import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {

    obtenerArticulos = async () => {
        if(!CnxMongoDB.connection) return []
        const articulos = await CnxMongoDB.db.collection('articulos').find({}).toArray()
        return articulos
    }

    guardarArticulo = async articulo => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('articulos').insertOne(articulo)
        return articulo
    }
}

export default ModelMongoDB