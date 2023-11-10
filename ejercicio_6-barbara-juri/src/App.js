import React, { useState } from 'react';
import './App.css';
import Ficha from './componentes/Ficha';

function App() {
  const [mensaje, setMensaje] = useState('Seleccione una ficha');
  const [colorLetra, setColorLetra] = useState('blue'); 

  const cambioMensaje = (id, fila, columna, contador) => {
    setMensaje(`Ficha ID:${id} (f:${fila} c:${columna}) contador(${contador +1})`);
  };

  const cambioColorLetra = (nuevoColor) => {
    setColorLetra(nuevoColor);
  }

  return (
    <div className="App">
      <h1 style={{ color: colorLetra }}>{mensaje}</h1>
      <div className="contenedor">
        <Ficha id={1} fila={1} columna={1} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={2} fila={1} columna={2} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={3} fila={1} columna={3} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={4} fila={2} columna={1} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={5} fila={2} columna={2} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={6} fila={2} columna={3} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={7} fila={3} columna={1} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={8} fila={3} columna={2} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
        <Ficha id={9} fila={3} columna={3} cambioMensaje={cambioMensaje} cambioColorLetra={cambioColorLetra} />
      </div>
    </div>
  );
}

export default App;

