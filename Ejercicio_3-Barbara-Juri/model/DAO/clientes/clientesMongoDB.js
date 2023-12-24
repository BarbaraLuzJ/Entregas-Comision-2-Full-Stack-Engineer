import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {

    obtenerCliente = async () => {
        if(!CnxMongoDB.connection) return []
        const cliente = await CnxMongoDB.db.collection('clientes').find({}).toArray()
        return cliente
    }

    guardarCliente = async cliente => {
        if(!CnxMongoDB.connection) return {}
        await CnxMongoDB.db.collection('clientes').insertOne(cliente)
        return cliente
    }
}

export default ModelMongoDB