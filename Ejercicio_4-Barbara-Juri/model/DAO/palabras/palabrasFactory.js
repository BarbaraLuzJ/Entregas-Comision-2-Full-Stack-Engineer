import ModelMongoDB from "./palabrasMongoDB.js";
import ModelFile from "./palabrasFile.js";

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'FILE':
                console.log('**** Palabra Persistiendo en File System ****');
                return new ModelFile();

            case 'MONGODB':
                console.log('**** Palabra Persistiendo en MongoDB ****');
                return new ModelMongoDB();

            default:
                console.log('**** No esta persistiendo****');
                return ;
        }
    }
}

export default ModelFactory;
