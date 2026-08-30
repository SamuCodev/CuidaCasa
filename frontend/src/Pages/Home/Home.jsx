import { IconMapPin } from "@tabler/icons-react";
import { Categorias } from "./components/Categorias/Categorias";
import { Servicios } from "./components/PanelServicios/PanelServicios";
import { Solicitudes } from "./components/PanelSolicitudes/PanelSolicitudes";
import "./Home.css";

export const Home = () => {
    return (
        <div className="dashboard">
            <div className="title-home">
                <div className="saludo">
                    <h1>¡Hola, Samuel David! 👋</h1>
                    <p>¿Que servicio necesitas hoy?</p>
                </div>
                <button className="ubicacion">
                    <IconMapPin size={22} stroke={2} />
                    Itagui, Antioquia
                </button>
            </div>
            <input
                type="search"
                placeholder="¿Que servicio estas buscando?"
                className="buscador"
            />
            <Categorias />
            <Servicios />
            <Solicitudes />
        </div>
    );
};
