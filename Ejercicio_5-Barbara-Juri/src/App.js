import './App.css';
import Contenido from './componentes/Contenido';
import Encabezado from './componentes/Encabezado';



function App() {
  return (
    <div className="App">
      <Encabezado titulo = "Aca va un título"/>
      <Contenido 
            texto ="El otro componente deberá guardar estado (statefull) y se llamará Contenido. 
            Representará un texto que recibirá por la prop ‘texto’, en un elemento de párrafo y 
            dispondrá de un botón que permita cambiar el fondo de dicho texto entre los colores 
            amarillo, cyan y naranja de manera rotativa"/>
    </div>
  );
}

export default App;
