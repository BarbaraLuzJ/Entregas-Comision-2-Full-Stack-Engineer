import '../componentes/Header.css'; 
import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";


function Header() {
    return (
        <div className="Header">
        <div className="nombre">
        <img className="logo" src={require('../Fotos/gatos-corazon.png')} alt="logo-gatos" />
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark separador-navbar">

            <NavLink className="navbar-brand d-lg-none" to="/" style={{color:'black', }}>Home</NavLink>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex-lg justify-content-lg-end collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
                <li className="nav-item">
                <NavLink className="nav-link" to="/inicio" style={{color:'black'}}>Inicio</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/alta" style={{color:'black'}}>Alta</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros" style={{color:'black'}}>Nosotros</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/tienda" style={{color:'black'}}>Tienda</NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/carrito"><BsCart4 style={{color:'black'}}/></NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link" to="/contacto"><RxEnvelopeClosed style={{color:'black'}}/></NavLink>
                </li>
            </ul>
            <form className="form-inline">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
            />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
            </form>
            </div>    
        </nav>
        </div>
    );
}

export default Header;
