import axios from "axios";

const URL_API_CARRITO = 'https://65357333c620ba9358ec7e07.mockapi.io/carrito/';


export async function enviarCarrito(carrito) {
    try {
        const { data:carritoGuardado } = await axios.post(URL_API_CARRITO, {pedido: carrito});
        return carritoGuardado;
    }
    catch(error) {
        console.error('ERROR POST AXIOS:', error.message);
        return {};
    }
}


