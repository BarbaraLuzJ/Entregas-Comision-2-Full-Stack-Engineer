import Servicio from '../servicio/articulos.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerArticulos = async (req,res) => {
        const articulos = await this.servicio.obtenerArticulos()
        res.json(articulos)
    }

    guardarArticulo = async (req,res) => {
        try {
            const articulo = req.body
            const articuloGuardado = await this.servicio.guardarArticulo(articulo)
            res.json(articuloGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }
}

export default Controlador