import { CardSolicitudActiva } from "../../../../components/Cards/CardSolicitudActiva/CardSolicitudActiva";
import "./PanelSolicitudes.css";

export const Solicitudes = () => {
    return (
        <aside className="solicitudes">
            <h2>Solicitudes Recientes</h2>
            <div className="solicitudes-container">
                <CardSolicitudActiva
                    badge={"En proceso"}
                    nombreProv={"Alfonso Lopez"}
                    tiempoLlegada={"13 Minutos"}
                />
                <CardSolicitudActiva
                    badge={"Activa"}
                    nombreProv={"Pepito Perez"}
                    tiempoLlegada={"10 minutos"}
                />
            </div>
        </aside>
    );
};
