import axios from "axios";

const URL_API_PRODUCTOS = 'https://65357333c620ba9358ec7e07.mockapi.io/productos/';

export async function obtenerProductos() {
    try {
        const { data: productosLeidos } = await axios.get(URL_API_PRODUCTOS);
        return productosLeidos;
    } catch (error) {
        console.error('ERROR GET AXIOS:', error.message);
        return [];
    }
}

export async function guardarProducto(producto) {
    try {
        const { data: productoGuardado } = await axios.post(URL_API_PRODUCTOS, producto);
        return productoGuardado;
    } catch (error) {
        console.error('ERROR POST AXIOS:', error.message);
        return {};
    }
}

export async function actualizarProducto(id, producto) {
    try {
        const { data: productoActualizado } = await axios.put(URL_API_PRODUCTOS + id, producto);
        return productoActualizado;
    } catch (error) {
        console.error('ERROR PUT AXIOS:', error.message);
        return {};
    }
}

export async function borrarProducto(id) {
    try {
        const { data: productoEliminado } = await axios.delete(URL_API_PRODUCTOS + id);
        return productoEliminado;
    } catch (error) {
        console.error('ERROR DELETE AXIOS:', error.message);
        return {};
    }
}
