import Servicio from '../servicio/clientes.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerCliente = async (req,res) => {
        const cliente = await this.servicio.obtenerCliente()
        res.json(cliente)
    }

    guardarCliente = async (req,res) => {
        try {
            const cliente = req.body
            const clienteGuardado = await this.servicio.guardarCliente(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }
}


export default Controlador