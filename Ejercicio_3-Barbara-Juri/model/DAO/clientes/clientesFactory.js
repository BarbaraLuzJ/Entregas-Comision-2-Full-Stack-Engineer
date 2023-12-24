import ModelMongoDB from "../clientes/clientesMongoDB.js"
import ModelMem from "../clientes/clientesMem.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**** Clientes Persistiendo en Memoria ****')
                return new ModelMem()

            case 'MONGODB':
                console.log('**** Clientes Persistiendo en MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Clientes Persistiendo en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory