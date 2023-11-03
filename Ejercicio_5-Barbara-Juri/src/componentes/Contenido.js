import React, { useState } from "react";
import './Contenido.css'

function Contenido(props) {
    const { texto } = props;
    const colores = ["yellow", "cyan", "orange"];

    const [colorIndex, setColorIndex] = useState(0);

    const cambiarColor = () => {
    setColorIndex((colorIndex + 1) % colores.length);
    };

    const color = colores[colorIndex];

    return (
    <div>
        <p className="contenido" style={{ backgroundColor: color }}>{texto}</p>
        <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
    );
    }

export default Contenido;