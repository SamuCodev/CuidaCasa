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
                    categoria={"Jardineria"}
                    infoSolicitud={"Esperando informacion del proovedor..."}
                />
                <CardSolicitudActiva
                    badge={"Activa"}
                    nombreProv={"Pepito Perez"}
                    categoria={"Cerrajero"}
                    infoSolicitud={"Esperando confirmacion..."}
                />
                <CardSolicitudActiva
                    badge={"En proceso"}
                    nombreProv={"Alfonso Lopez"}
                    categoria={"Jardineria"}
                    infoSolicitud={"Esperando informacion del proovedor..."}
                />
                <CardSolicitudActiva
                    badge={"Activa"}
                    nombreProv={"Pepito Perez"}
                    categoria={"Cerrajero"}
                    infoSolicitud={"Esperando confirmacion..."}
                />
            </div>
        </aside>
    );
};
