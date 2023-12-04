import React, { useState } from 'react';
import './Tabla.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin6Line } from "react-icons/ri";

export const Tabla = (props) => {
    const { carrito, borrarID, incrementarCantID, decrementarCantID } = props;
    const [showModal, setShowModal] = useState(false);
    const [productoBorrado, setProductoBorrado] = useState(null);

    const handleMostrarModal = (producto) => {
        setProductoBorrado(producto);
        setShowModal(true);
    };

    const handleCerrarModal = () => {
        setProductoBorrado(null);
        setShowModal(false);
    };

    const handleAceptarBorrar = () => {
        if (productoBorrado) {
            borrarID(productoBorrado.id);
            setProductoBorrado(null);
            setShowModal(false);
        }
    };

    const calcularSubtotal = (producto) => {
        const subtotal = producto.cantidad * producto.precio;
        return subtotal;
    };
    const calcularTotal = () => {
        const totalCalculado = carrito.reduce((prev, producto) => {
            return prev + calcularSubtotal(producto);
        }, 0);
    
        return totalCalculado;
    };
    

    return (
        <div className="Tabla">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>nombre</th>
                            <th>precio</th>
                            <th>marca</th>
                            <th>foto</th>
                            <th>cantidad</th>
                            <th>subtotal</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>${producto.precio}</td>
                                <td>{producto.marca}</td>
                                <td>
                                    <img width="100px" src={producto.foto} alt={'foto de ' + producto.nombre} />
                                </td>
                                <td>
                                    <div className="contenedor-contador">
                                    <button
                                        className="btn btn-info mr-2"
                                        onClick={() => decrementarCantID(producto.id)}
                                    >
                                        -
                                    </button>
                                    <div className="contador">{producto.cantidad}</div>
                                    <button
                                        className="btn btn-info ml-2"
                                        onClick={() => incrementarCantID(producto.id)}
                                    >
                                        +
                                    </button>
                                    </div>
                                </td>
                                <td>${calcularSubtotal(producto)}</td>
                                <td>
                                    <div className='contenedor-eliminar'
                                        onClick={() => handleMostrarModal(producto)}
                                    >
                                        <RiDeleteBin6Line className='eliminar'/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className='total'>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td>Total:</td>
                            <td>${calcularTotal()}</td>
                            <td ></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <Modal show={showModal} onHide={handleCerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Producto a borrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productoBorrado ? `¿Desea borrar el producto ${productoBorrado.nombre}?` : ''}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCerrarModal}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={handleAceptarBorrar}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

