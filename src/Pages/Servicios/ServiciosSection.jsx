import {
    IconMap2,
    IconList,
    IconStar,
    IconLocation,
    IconCategory,
} from "@tabler/icons-react";
import { CardSolicitudPreview } from "../../components/Cards/CardSolicitudPreview/CardSolicitudPreview";
import "./ServiciosSection.css";

export const ServiciosSection = () => {
    return (
        <section className="servicios-section">
            <div className="mapa-lista-filter">
                <a href="#" className="lista selected">
                    <IconList size={25} stroke={2} />
                    Lista
                </a>
                <a href="#" className="mapa">
                    <IconMap2 size={25} stroke={2} />
                    Mapa
                </a>
            </div>
            <div className="filters" aria-label="Filtros de proveedores">
                <div className="filter-field">
                    <label htmlFor="categoria" className="filter-field__label">
                        <IconCategory size={18} stroke={2} />
                        <span>Categoría</span>
                    </label>
                    <select name="categoria" id="categoria">
                        <option value="">Todas</option>
                        <option value="todos">Todos</option>
                        <option value="aseo">Aseo</option>
                        <option value="jardineria">Jardineria</option>
                        <option value="plomeria">Plomeria</option>
                        <option value="electriciad">Electricidad</option>
                        <option value="niñeras">Niñeras</option>
                        <option value="cerrajeria">Cerrajeria</option>
                    </select>
                </div>

                <div className="filter-field">
                    <label htmlFor="distancia" className="filter-field__label">
                        <IconLocation size={18} stroke={2} />
                        <span>Distancia</span>
                    </label>
                    <select name="distancia" id="distancia">
                        <option value="">Cualquiera</option>
                        <option value="todas">Todas</option>
                        <option value="menos1km">A menos de 1km</option>
                        <option value="menos3km">A menos de 3km</option>
                        <option value="menos5k">A menos de 5km</option>
                        <option value="menos10km">A menos de 10km</option>
                    </select>
                </div>

                <div className="filter-field">
                    <label htmlFor="calificacion" className="filter-field__label">
                        <IconStar size={18} stroke={2} />
                        <span>Calificación</span>
                    </label>
                    <select name="calificacion" id="calificacion">
                        <option value="">Cualquiera</option>
                        <option value="todas">Todas</option>
                        <option value="mas4.5">+4.5 ⭐</option>
                        <option value="mas3.5">+3.5 ⭐</option>
                        <option value="mas2.5">+2.5 ⭐</option>
                    </select>
                </div>
            </div>
            <h2>Proveedores disponibles</h2>
            <div className="servicios-container">
                <CardSolicitudPreview
                    nombreProv={"Alberto Rosales"}
                    categoria={"Jardineria"}
                    distancia={"1.6km"}
                    calificacion={4.8}
                />
                <CardSolicitudPreview
                    nombreProv={"Maria Jose Perea"}
                    categoria={"Niñera"}
                    distancia={"2.7km"}
                    calificacion={3.9}
                />
                <CardSolicitudPreview
                    nombreProv={"Felipe Torres"}
                    categoria={"Plomeria"}
                    distancia={"5.3km"}
                    calificacion={4.2}
                />
                <CardSolicitudPreview
                    nombreProv={"Felipe Torres"}
                    categoria={"Plomeria"}
                    distancia={"5.3km"}
                    calificacion={4.2}
                />
                <CardSolicitudPreview
                    nombreProv={"Alberto Rosales"}
                    categoria={"Jardineria"}
                    distancia={"1.6km"}
                    calificacion={4.8}
                />
                <CardSolicitudPreview
                    nombreProv={"Maria Jose Perea"}
                    categoria={"Niñera"}
                    distancia={"2.7km"}
                    calificacion={3.9}
                />
                <CardSolicitudPreview
                    nombreProv={"Felipe Torres"}
                    categoria={"Plomeria"}
                    distancia={"5.3km"}
                    calificacion={4.2}
                />
                <CardSolicitudPreview
                    nombreProv={"Felipe Torres"}
                    categoria={"Plomeria"}
                    distancia={"5.3km"}
                    calificacion={4.2}
                />
                <CardSolicitudPreview
                    nombreProv={"Alberto Rosales"}
                    categoria={"Jardineria"}
                    distancia={"1.6km"}
                    calificacion={4.8}
                />
                <CardSolicitudPreview
                    nombreProv={"Maria Jose Perea"}
                    categoria={"Niñera"}
                    distancia={"2.7km"}
                    calificacion={3.9}
                />
                <CardSolicitudPreview
                    nombreProv={"Felipe Torres"}
                    categoria={"Plomeria"}
                    distancia={"5.3km"}
                    calificacion={4.2}
                />
                <CardSolicitudPreview
                    nombreProv={"Felipe Torres"}
                    categoria={"Plomeria"}
                    distancia={"5.3km"}
                    calificacion={4.2}
                />
            </div>
        </section>
    );
};
