import React, { useEffect, useState } from 'react';
import './Index.css';
import { obtenerProductos } from '../Servicios/productos';
import { Card } from './Card';
import { useLocalStorage } from '../Hooks/useLocalStore';

export function Index() {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useLocalStorage('carrito', []);

    useEffect(() => {
        console.log('Componente Index Inicio (montado)');

        async function pedir() {
            const productos = await obtenerProductos();
            setProductos(productos);
        }

        pedir();

    }, []);

    function agregarCarritoID(id, cantidad) {
        const producto = productos.find(p => p.id === id);
        const carritoClon = [...carrito];

        let pC = carritoClon.find(prodC => prodC.id === producto.id);

        if (!pC) {
            producto.cantidad = cantidad;
            carritoClon.push(producto);
        } else {
            pC.cantidad += cantidad;
        }

        setCarrito(carritoClon);
    }

    return (
        <div className="Tienda">
            <div className="cards-container">
                {productos.map((producto, index) => (
                    <Card key={index} producto={producto} agregarCarritoID={agregarCarritoID} />
                ))}
            </div>
        </div>
    );
}


