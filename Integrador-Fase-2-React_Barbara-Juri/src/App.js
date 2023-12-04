import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';



import { Index as Inicio } from './componentes/INICIO/Index';
import { Index as Alta } from './componentes/ALTA/Index';
import { Index as Carrito } from './componentes/CARRITO/Index';
import { Index as Contacto } from './componentes/CONTACTO/Index';
import { Index as Nosotros } from './componentes/NOSOTROS/Index';
import { Index as Tienda } from './componentes/TIENDA/Index';

import { RutaNoValida } from './componentes/RutaNoValida';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <div className="container-fluid m-0 p-0">
          <BrowserRouter>
            <Header/>

            <Routes>
              <Route index element={<Inicio titulo="Inicio" />} />

              <Route path='inicio' element={<Inicio titulo="Inicio" />} />
              <Route path='alta' element={<Alta titulo="Alta" />} />
              <Route path='carrito' element={<Carrito titulo="Carrito" />} />
              <Route path='contacto' element={<Contacto titulo="Contacto" />} />
              <Route path='nosotros' element={<Nosotros titulo="Nosotros" />} />
              <Route path='tienda' element={<Tienda titulo="Tienda" />} />
              
              <Route path='*' element={<RutaNoValida />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
          
        </div>
      </div>
  );
}

export default App;
