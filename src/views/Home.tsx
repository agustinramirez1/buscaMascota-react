// import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <section className="page-section mb-0" id="principal">
                <div className="img-full bg-principal">
                    <div className="row m-0 pt-5">
                        <div className="col-lg-5 ml-auto pt-5 mt-4 text-center">
                            <img src="src/img/principal1.jpeg" className="img-fluid" style={{ maxHeight: 450 + "px" }} alt="Dow watching" />
                        </div>
                        <div className="col-lg-7 ml-auto pt-5 pe-5 text-center" style={{ marginTop: 70 + "px" }}>
                            <h4 className="page-section-heading text-center bg-text text-secondary rounded-4 p-3 mx-2"> 
                            Busca Mascota es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños. <br /> 
                            Puedes publicar tu mascota sin costo! Y tambi&eacute;n ser&aacute; publicado en las redes oficiales de Busca Mascota autom&aacute;ticamente.<br />
                            </h4>
                            <h3 className="page-section-heading text-center text-dark">
                                <Link to={'/map'} className="btn btn-warning btn-lg mt-2 me-4 btn-social rounded-4 text-white" >
                                    Buscar mi mascota
                                </Link>
                                <Link to={'/publicar'} className="btn btn-outline-dark btn-social rounded-4 btn-lg mt-2 ml-1">
                                    Publicar mascota
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='page-section bg-amarillo'>
                <div className="row amarillo m-0">
                    <div className="col-lg-6 text-center py-5" >
                        <div className="container-fluid bg-text text-secondary rounded-4 p-4">
                            <h2 className="page-section-heading text-center mt-5" >Qui&eacute;n puede utilizar el sitio?</h2>
                            <h4 className="page-section-text mt-5 ml-3">
                                <ul>
                                    <li>Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.</li>
                                    <li>Personas que han encontrado o avistado una mascota que parec&iacute;a perdida y desean publicar un reporte.</li>
                                </ul>
                            </h4>
                            <h4 className="page-section-text text-center mt-5 ml-3">
                                Todo con el fin de que estas puedan reencontrarse con sus dueños.
                            </h4>
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-6 text-center py-5 amarillo">
                        <img src="src\img\paw-five.jpg" className="img-fluid rounded-4" alt="Man and dog" />
                    </div>
                </div>
            </section>
            <section className="page-section bg-secondary text-white mb-0">
                <div className="img-donate">
                    <div className="row pt-5">
                        <div className="col-lg-6 ml-auto pt-5" style={{ marginTop: 40 + "px" }}>
                            <h4 className="page-section-heading text-center text-light">Puedes colaborar</h4>
                            <h4 className="page-section-heading text-center text-light">para que este sitio siga activo</h4>
                            <h4 className="page-section-heading text-center text-light">y funcionando siempre</h4>
                            <h4 className="page-section-heading text-center text-light">
                                <Link to={'/colaborar'} className="btn btn-info btn-social btn-lg mt-2 text-white rounded-4">
                                    Colaborar
                                </Link>
                            </h4>
                        </div>
                        <div className="col-lg-4 ml-auto py-5 text-center" style={{ marginTop: 40 + "px" }}>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home