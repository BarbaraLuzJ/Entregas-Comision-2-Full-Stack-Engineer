import ModelFactory from '../model/DAO/articulos/articulosFactory.js'
import config from '../config.js'


class Servicio {

    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerArticulos = async _=> {
        const articulos = await this.model.obtenerArticulos()
        return articulos
        }

    guardarArticulo = async articulo => {
        const articuloGuardado = await this.model.guardarArticulo(articulo)
        return articuloGuardado
    }
}

export default Servicio

