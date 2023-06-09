// import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useState } from 'react';
import "leaflet/dist/leaflet.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Publicar = () => {

    const tipo_reporte = ["Perdido", "Avistado", "Retenido", "Otro"];
    const especies = ["Perro", "Gato", "Loro", "Otro"];
    const sexos = ['Macho', 'Hembra', 'Desconocido'];
    const [tipoReporte, setTipoReporte] = useState()
    const [titulo, setTitulo] = useState()
    const [descripcion, setDescripcion] = useState()
    const [foto, setFoto] = useState()
    const [especie, setEspecie] = useState()
    const [resumenUbi, setResumenUbi] = useState()
    const [ultimaVez, setUltimaVez] = useState()

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id == 'tipo_reporte') {
            setTipoReporte(value);
        }

        if (id == 'titulo') {
            setTitulo(value);
        }

        if (id == 'descripcion') {
            setDescripcion(value);
        }

        if (id == 'foto') {
            setFoto(value);
        }

        if (id == 'especie') {
            setEspecie(value);
        }

        if (id == 'resumen') {
            setResumenUbi(value);
        }

        if (id == 'ultimaVez') {
            setUltimaVez(value);
        }
    }

    const isEmpty = (value) => {
        return value.trim() == ''
    }

    const emptyFields = () => {

        let noError = true;

        if (isEmpty(tipoReporte)) {
            Swal.fire({ icon: 'error', text: 'Debe seleccionar un tipo de reporte' });
            noError = false;
        } else if (isEmpty(titulo)) {
            Swal.fire({ icon: 'error', text: 'Debe insertar un título' });
            noError = false
        } else if (isEmpty(descripcion)) {
            Swal.fire({ icon: 'error', text: 'Debe insertar una descripcion' });
            noError = false
        } else if (isEmpty(foto)) {
            Swal.fire({ icon: 'error', text: 'Debe insertar un archivo' });
            noError = false
        } else if (isEmpty(especie)) {
            Swal.fire({ icon: 'error', text: 'Debe seleccionar una especie' });
            noError = false
        } else if (isEmpty(resumenUbi)) {
            Swal.fire({ icon: 'error', text: 'Debe insertar un resumen de su Ubicación' });
            noError = false
        } else if (isEmpty(ultimaVez)) {
            Swal.fire({ icon: 'error', text: 'Debe ingresar una fecha en el que vió al animal' });
            noError = false
        }

        return noError
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (emptyFields()) {
            console.log('Solicitud cargada con exito')
        }
    }

    return (
        <form className="container">
            <div className="p-4 col-md-9 mx-auto">
                <MapContainer center={[-25.232373277106692, -57.56066635259458]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-25.232373277106692, -57.56066635259458]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="p-4 col-md-9 mx-auto row">
                <div className="mb-4">
                    <label htmlFor="tipo_reporte"><b>Tipo de reporte * </b>:</label>
                    {tipo_reporte && <select className="form-select" id="tipo_reporte" defaultValue={''} onChange={handleChange}>
                        <option value="" disabled>Seleccionar</option>
                        {tipo_reporte.map((item, index) => (
                            <option key={index} value={item}>{item}</option>))}
                    </select>}
                    <span className="helptext"><small></small></span>
                </div>

                <ul className="list-unstyled ps-4">
                    <li>
                        <small><b>Perdido</b>: Si perdiste o alguien perdió su mascota y quieres reportarla como perdida.</small>
                    </li>
                    <li>
                        <small><b>Avistado</b>: Si viste una mascota que parecía perdida, pero no pudiste retenerla.</small>
                    </li>
                    <li>
                        <small><b>Retenido</b>: Si encontraste una mascota y pudiste retenerla o sabes de alguien que la tiene retenida.</small>
                    </li>
                    <li>
                        <small><b>Otro</b>: Otro tipo de reporte.</small>
                    </li>
                </ul>

                <div className="mb-4">
                    <label htmlFor="titulo"><b>Título de reporte *</b>:</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: Perro con collar encontrado barrio San Vicente" id="titulo" onChange={handleChange} />
                </div>

                <div className="mb-4">
                    <label htmlFor="descripcion"><b>Descripción de reporte *</b>:</label>
                    <textarea className="form-control" placeholder="Ejemplo: Encontré un perro blanco con collar, creo que es una mezcla de caniche, parece asustado y no pude retenerlo." id="descripcion" onChange={handleChange}></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="foto"><b>Foto *</b>:</label>
                    <input type="file" name="picture" className="form-control file-field" lang="es" accept="image/*" id="foto" onChange={handleChange}/>
                    <span className="helptext"><br /><small>Se necesita una imagen de la mascota para evitar confusiones y que sea más sencillo reconocerla</small></span>
                </div>

                <div className="mb-4">
                    <label htmlFor="nombre"><b>Nombre de contacto </b>:</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: Juan Irala" id="nombre" />
                </div>

                <div className="mb-4">
                    <label htmlFor="nroContacto"><b>Teléfono de contacto </b>:</label>
                    <input type="tel" className="form-control" placeholder="Ejemplo: +595990123456" id="nroContacto" />
                </div>

                <div className="mb-4">
                    <label htmlFor="id_specie"><b>Especie *</b>:</label>
                    {especies && <select className="form-select" id="especie" defaultValue={''} onChange={handleChange}>
                        <option value="" disabled>Seleccionar</option>
                        {especies.map((item, index) => (
                            <option key={index} value={item}>{item}</option>))}
                    </select>}
                </div>

                <div className="mb-4">
                    <label htmlFor="id_age"><b>Edad aproximada</b>:</label>
                    <input type="number" name="age" className="form-control" min="0" id="id_age" />
                </div>

                <div className="mb-4">
                    <label htmlFor="id_sex"><b>Sexo</b>:</label>
                    {sexos && <select name="sex" className="form-control" id="sexo" defaultValue={''} onChange={handleChange}>
                        <option value="" disabled>Seleccionar</option>
                        {sexos.map((item, index) => (
                            <option key={index} value={item}>{item}</option>))}
                    </select>}
                </div>

                <div className="mb-4">
                    <label htmlFor="resumen"><b>Resumen de ubicación *</b>:</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: Árboles, Paso de la Patria, Hipódromo, Asuncion, Región Oriental, 1906, Paraguay" id="resumen" onChange={handleChange} />
                </div>

                <div className="mb-4">
                    <label htmlFor="ultimaVez"><b>Última vez visto * </b>:</label>
                    <input type="date" className="form-control" placeholder="Select a date" id="ultimaVez" onChange={handleChange} />
                </div>

                <div className="mb-4">
                    <label htmlFor="id_accept_terms">Acepto los <Link to={"/terminos"}>Términos de uso</Link> *: &nbsp;</label>
                    <input type="checkbox" name="accept_terms" id="id_accept_terms" />
                    <input type="hidden" name="country" id="id_country" value="Paraguay" />
                    <input type="hidden" name="postal_code" id="id_postal_code" value="001218" />
                    <input type="hidden" name="city" id="id_city" value="Asuncion" />
                    <input type="hidden" name="address" id="id_address" value="Juan de Mena" />
                    <input type="hidden" name="latitude" id="id_latitude" value="-25.291081536329333" />
                    <input type="hidden" name="longitude" id="id_longitude" value="-57.625865936279304" />
                </div>

                <div className="row-cols-1 text-center pb-3">
                    <button type="submit" className="btn btn-success btn-lg btn-block" id="submitButton" onClick={onSubmitHandler}>Publicar</button>
                </div>

            </div>
        </form>
    )
}

export default Publicar