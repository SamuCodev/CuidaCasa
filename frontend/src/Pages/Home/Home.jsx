import { IconMapPin } from "@tabler/icons-react";
import { Categorias } from "./components/Categorias/Categorias";
import { Servicios } from "./components/PanelServicios/PanelServicios";
import { Solicitudes } from "./components/PanelSolicitudes/PanelSolicitudes";
import { useAuth } from "../../context/AuthContext";
import "./Home.css";

export const Home = () => {
    const { user } = useAuth();

    if (!user) {
        return <p>No hay usuario logueado</p>;
    }
    return (
        <div className="dashboard">
            <div className="title-home">
                <div className="saludo">
                    <h1>
                        ¡Hola, {user.nombre} {user.apellido}! 👋
                    </h1>
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
