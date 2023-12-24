class ModelMem {

    constructor() {
        this.articulos = []
    }

    obtenerArticulos = async () => this.articulos

    guardarArticulo = async articulo => {
        articulo.id = String(parseInt(this.articulos[this.articulos.length-1]?.id || 0) + 1)
        if(articulo.precio) articulo.precio = Number(articulo.precio)
        if(articulo.stock) articulo.stock = parseInt(articulo.stock)
        this.articulos.push(articulo)
        return articulo
    }

}

export default ModelMem