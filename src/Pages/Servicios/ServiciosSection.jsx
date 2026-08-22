import {
    IconArrowLeft,
    IconMap2,
    IconList,
    IconBell,
    IconStar,
    IconLocation,
    IconCategory,
} from "@tabler/icons-react";
import { CardSolicitudPreview } from "../../components/Cards/CardSolicitudPreview/CardSolicitudPreview";
import "./ServiciosSection.css";

export const ServiciosSection = () => {
    return (
        <section className="servicios-section">
            <div className="servicios-section-header">
                <h2>Servicios</h2>
            </div>
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
            <div className="filters">
                <div className="filter-field">
                    <span className="filter-field__icon">
                        <IconCategory size={18} stroke={2} />
                    </span>
                    <select name="categoria" id="categoria">
                        <option value="">Categoria</option>
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
                    <span className="filter-field__icon">
                        <IconLocation size={18} stroke={2} />
                    </span>
                    <select name="distancia" id="distancia">
                        <option value="">Distancia</option>
                        <option value="todas">Todas</option>
                        <option value="menos1km">A menos de 1km</option>
                        <option value="menos3km">A menos de 3km</option>
                        <option value="menos5k">A menos de 5km</option>
                        <option value="menos10km">A menos de 10km</option>
                    </select>
                </div>

                <div className="filter-field">
                    <span className="filter-field__icon">
                        <IconStar size={18} stroke={2} />
                    </span>
                    <select name="calificacion" id="calificacion">
                        <option value="">Calificacion</option>
                        <option value="todas">Todas</option>
                        <option value="mas4.5">+4.5 ⭐</option>
                        <option value="mas3.5">+3.5 ⭐</option>
                        <option value="mas2.5">+2.5 ⭐</option>
                    </select>
                </div>
            </div>
            <div className="servicios-container">
                <h2>Proveedores disponibles</h2>
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
