// import React from 'react'
// import Botones from '../Botones/Botones'

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="row m-0">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <p className="lead mb-0">Sitio creado y administrado por<br /> <Link to={"https://www.oscargonzalez.work/"} className="link-profile">Oscar Gonz&aacute;lez</Link>
                    </p>
                    <img src="src\img\3perrosyyo.jpg" className="rounded-circle" alt="Creador" width="200" height="220" />
                </div>
                <div className="col-lg-4 mb-lg-0 mt-5">
                    <nav className="nav flex-column">
                        <Link to={'/terminos'} className="btn btn-light mx-1 mb-1 rounded-4 btn-social">Términos de uso <i className="fas fa-scroll"></i></Link>
                        <Link to={'https://github.com/OscarGonzalez97/BuscaMascota'} className="btn btn-light btn-social mx-1 rounded-4" target="_blank">Código fuente aquí <i className="fab fa-github"></i></Link>
                    </nav>
                </div>
                <div className="col-lg-4 mb-lg-0 mt-5">
                    <h4 className="text-uppercase mb-4">Contacto</h4>
                    <Link to={'https://twitter.com/BuscaMascotapy'} className="btn btn-outline-light btn-social mx-1 rounded-4" target="_blank">
                        <i className="fab fa-fw fa-twitter"></i>
                    </Link>
                    <Link to={'https://facebook.com/Busca-Mascota-105650557977880'} className="btn btn-outline-light btn-social mx-1 rounded-4" target="_blank">
                        <i className="fab fa-fw fa-facebook"></i>
                    </Link>
                    <Link to={'https://instagram.com/buscamascotapy/'} className="btn btn-outline-light btn-social mx-1 rounded-4" target="_blank">
                        <i className="fab fa-fw fa-instagram"></i>
                    </Link>
                    <Link to={'mailto:buscamascotapy@gmail.com'} className="btn btn-outline-light btn-social mx-1 rounded-4" target="_blank">
                        <i className="fas fa-envelope"></i>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer