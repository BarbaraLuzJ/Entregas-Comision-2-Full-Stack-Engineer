import ModelMongoDB from "./articulosMongoDB.js"
import ModelMem from "./articulosMem.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**** Artículo Persistiendo en Memoria ****')
                return new ModelMem()

            case 'MONGODB':
                console.log('**** Artículo Persistiendo en MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Persistiendo en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory