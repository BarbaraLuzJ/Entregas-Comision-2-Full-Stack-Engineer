import React, { useState } from "react";
import "./Card.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Card = (props) => {
  const { producto, agregarCarritoID } = props;
  const [cantidad, setCantidad] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleIncrementar = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrementar = () => {
    if (cantidad >= 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    agregarCarritoID(producto.id, cantidad);
    setShowModal(true);
  };

  const handleCerrarModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Producto">
      <h3>{producto.nombre}</h3>
      <img src={producto.foto} alt="" />
      <p>
        <b className="precio">Precio: </b>${producto.precio} <b>Stock: </b>{producto.stock}</p>
      <p>
        <b>Marca: </b>
        {producto.marca}
      </p>
      <p>
        <b>Categoría: </b>
        {producto.categoria}
      </p>
      <p>
        <b>Subcategoría: </b>
        {producto.subcategoria}
      </p>
      <p>
        <b style={{ color: "gold" }}>Envío: </b>
        {producto.envio ? "Si" : "No"}
      </p>
      <div className="botones">
        <button className="btn btn-outline-light" onClick={handleDecrementar}>-</button>
        <span className="cantidad">{cantidad}</span>
        <button className="btn btn-outline-light" onClick={handleIncrementar}>+</button>
        <button className="btn btn-outline-light" onClick={handleAgregarAlCarrito}>¡Agregar!</button>
      </div>

      <Modal show={showModal} onHide={handleCerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡El producto ha sido agregado al carrito!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

