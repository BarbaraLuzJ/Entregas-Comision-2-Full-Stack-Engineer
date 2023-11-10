import React, { useState } from 'react';
import './Ficha.css';

function Ficha(props) {
    const { id, fila, columna, cambioMensaje, cambioColorLetra } = props;
    const [contador, setContador] = useState(0);
    const [colorFondo, setColorFondo] = useState('gray');

    const cambioMensajeLocal = () => {
        cambioMensaje(id, fila, columna, contador);
    };

    const colorClick = () => {
        const nuevoColor = fila === columna ? 'red' : 'black';
        setColorFondo(nuevoColor);
        cambioColorLetra(nuevoColor);
    };

    const incrementaContador = () => {
        setContador(contador + 1);
        colorClick();
        cambioMensajeLocal();
    };

    return (
        <div className='ficha' onClick={incrementaContador} style={{ backgroundColor: colorFondo }}>
        <p>ID: {id} <br/>Fila: {fila} <br/>Columna: {columna} <br/>Contador: {contador}</p>
        </div>
    );
}

export default Ficha;



