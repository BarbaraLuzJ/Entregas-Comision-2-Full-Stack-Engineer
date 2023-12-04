import './Index.css';
import React from "react";
import { NavLink } from "react-router-dom";


export function Index() {
    return (
        <div className='Inicio'>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('./Imagenes/perritoreal.avif')} className="imagenes" alt="Foto perro"/>
                        <div class="carousel-caption d-none d-md-block">
                            <NavLink classNameName="nav-link" to="/nosotros" ><h2>Conoce nuestra historia ingresando <b>AQUI!</b></h2></NavLink>
                    </div>
                </div>
                    <div class="carousel-item">
                        <img src={require('./Imagenes/conejoreal.avif')} className="imagenes" alt="Foto conejo"/>
                        <div class="carousel-caption d-none d-md-block">
                            <NavLink classNameName="nav-link" to="/tienda" ><h2>Conoce nuestra TIENDA <b>AQUI!</b></h2></NavLink>
                            <p>Tenemos todo lo que necesita tu mascota</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./Imagenes/avereal2.jpg')} className="imagenes" alt="Foto Ave"/>
                        <div class="carousel-caption d-none d-md-block">
                            <NavLink classNameName="nav-link" to="/contacto"><h2>Contactanos! <b>AQUI</b></h2></NavLink>
                        </div>
                    </div>
                    </div>
                        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </button>
            </div>
        </div>
    )
}