import ModelFactory from '../model/DAO/palabras/palabrasFactory.js';
import config from '../config.js';
import validar from './validaciones/palabras.js';

class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerPalabras = async _ => {
        const palabras = await this.model.obtenerPalabras();
        return palabras;
    }
    

    guardarPalabra = async palabra => {
        const error = validar(palabra);
        if(!error) {
            const palabraGuardada = await this.model.guardarPalabra(palabra);
            return palabraGuardada;
        }
        else {
            throw new Error(error.details[0].message);
        }
    }

}

export default Servicio;


