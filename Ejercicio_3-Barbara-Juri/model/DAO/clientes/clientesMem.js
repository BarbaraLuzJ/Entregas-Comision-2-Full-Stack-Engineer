class ModelMem {

    constructor() {
        this.cliente = []
    }

    obtenerCliente = async () => this.cliente

    guardarCliente = async cliente => {
        cliente.id = String(parseInt(this.cliente[this.cliente.length-1]?.id || 0) + 1)
        this.cliente.push(cliente)
        return cliente
    }
}

export default ModelMem