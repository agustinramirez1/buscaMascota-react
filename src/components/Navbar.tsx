// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ps-4" id="mainNav">
                <Link to={'/'} className="navbar-brand">
                    <img src="/src/img/BUSCAMASCOTA.jpeg" width="300" height="150" alt="Logo Busca Mascota"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link py-3 px-0 px-lg-3 nav-icon"> <h5><i className="fas fa-home"></i>  Home </h5><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/publicar'} className="nav-link py-3 px-0 px-lg-3 nav-icon"> <h5><i className="fas fa-paw"></i>  Publicar Mascota </h5> <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/map'} className="nav-link py-3 px-0 px-lg-3 nav-icon"> <h5><i className="fas fa-search"></i>  Buscar Mascota </h5> <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/colaborar'} className="nav-link py-3 px-0 px-lg-3 nav-icon"> <h5><i className="fas fa-hands"></i>  Colaborar </h5> <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link py-3 px-0 px-lg-3 nav-icon"> <h5><i className="fas fa-hand-holding-heart"></i>  Adopciones </h5></Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar