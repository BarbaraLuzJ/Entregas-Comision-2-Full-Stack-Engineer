import express from 'express'
import Controlador from '../controlador/articulos.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.obtenerArticulos)
        this.router.post('/', this.controlador.guardarArticulo)

        return this.router
    }    
}


export default Router