// import { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useState } from 'react';
import "leaflet/dist/leaflet.css";

const Publicar = () => {

    const tipo_reporte = ["Perdido", "Avistado", "Retenido", "Otro"];
    const [tipoReporte, setTipoReporte] = useState()

    const handleChange = (event) => {
        const { id, value } = event.target;
        if (id == 'tipo_reporte') {
            setTipoReporte(value);
        }

        if (id == 'centro') {
            setCentro(value);
        }
    }

    const isEmpty = (value) => {
        return value.trim() == ''
    }

    const emptyFields = () => {

        let noError = true;

        if (isEmpty(fecha)) {
            Swal.fire({ icon: 'error', text: 'Debe cargar una fecha válida' });
            noError = false;
        } else if (isEmpty(centro)) {
            Swal.fire({ icon: 'error', text: 'Debe cargar un centro válido' });
            noError = false
        }

        return noError
    }

    return (
        <div className="container">
                <div className="p-4 col-md-9 mx-auto">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            <div className="p-4 col-md-9 mx-auto row">
                <div className="mb-4">
                    <label htmlFor="id_report_type"><b>Tipo de reporte * </b>:</label>
                    {tipo_reporte && <select className="form-select" id="tipo_reporte" defaultValue={''}>
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

            </div>
        </div>
    )
}

export default Publicar