import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './Index.css';
import { Tabla } from './Tabla';
import { useLocalStorage } from '../Hooks/useLocalStore';
import { enviarCarrito } from '../Servicios/carrito';

export function Index() {
    const [carrito, setCarrito] = useLocalStorage('carrito', []);
    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState('');

    useEffect(() => {
        console.log('Componente Index Carrito (montado)');

        return () => {
            console.log('Componente Index Carrito (desmontado)');
        };
    }, []);

    const handleMostrarModal = (action) => {
        setModalAction(action);
        setShowModal(true);
    };

    const handleCerrarModal = () => {
        setShowModal(false);
    };

    function borrarAll() {
        handleMostrarModal('eliminar');
    }

    function borrarID(id) {
        const carritoClon = [...carrito];
        const index = carritoClon.findIndex(p => p.id === id);
        carritoClon.splice(index, 1);
        setCarrito(carritoClon);
    }

    function incrementarCantID(id) {
        const carritoClon = [...carrito];
        const producto = carritoClon.find(p => p.id === id);
        if (producto.cantidad < producto.stock) {
            producto.cantidad++;
            setCarrito(carritoClon);
        }
    }

    function decrementarCantID(id) {
        const carritoClon = [...carrito];
        const producto = carritoClon.find(p => p.id === id);
        if (producto.cantidad > 1) {
            producto.cantidad--;
            setCarrito(carritoClon);
        }
    }

    async function pedir() {
        console.log('pedir');

        const carritoEnviado = await enviarCarrito(carrito);
        console.log(carritoEnviado);
        setCarrito([]);
    }

    const handleConfirmarAccion = () => {
        if (modalAction === 'eliminar') {
            setCarrito([]);
        } else if (modalAction === 'comprar') {
            pedir();
        }

        handleCerrarModal();
    };

    return (
        <div className="Carrito">
            {carrito.length === 0 && <h3 className='carrito-vacio'>No se encontraron pedidos</h3>}
            {carrito.length > 0 && (
                <>
                    <Tabla
                        carrito={carrito}
                        borrarID={borrarID}
                        incrementarCantID={incrementarCantID}
                        decrementarCantID={decrementarCantID}
                    />
                    <div className='botones'>
                        <button className="btn btn-danger font-weight-bold" onClick={() => handleMostrarModal('comprar')}>
                            Comprar
                        </button>
                        <button className="btn btn-secondary font-weight-bold" onClick={borrarAll}>
                            Eliminar
                        </button>
                    </div>
                    <Modal show={showModal} onHide={handleCerrarModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmación</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {modalAction === 'eliminar'
                                ? '¿Está seguro de eliminar todos los productos?'
                                : '¿Desea avanzar con la compra?'}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCerrarModal}>
                                Cancelar
                            </Button>
                            <Button variant={modalAction === 'eliminar' ? 'secondary' : 'danger'} onClick={handleConfirmarAccion}>
                                {modalAction === 'eliminar' ? 'Eliminar' : 'Comprar'}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </div>
    );
}

