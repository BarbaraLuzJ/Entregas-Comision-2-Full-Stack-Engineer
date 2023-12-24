import express from 'express'
import Controlador from '../controlador/clientes.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.obtenerCliente)
        this.router.post('/', this.controlador.guardarCliente)

        return this.router
    }    
}


export default Router