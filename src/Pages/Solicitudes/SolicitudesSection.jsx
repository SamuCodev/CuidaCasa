import { IconArrowLeft, IconBell } from "@tabler/icons-react";
import { CardSolicitudActiva } from "../../components/Cards/CardSolicitudActiva/CardSolicitudActiva";
import { CardSolicitudCompleta } from "../../components/Cards/CardSolicitudCompleta/CardSolicitudCompleta";

import "./SolicitudesSection.css";
export const SolicitudesSection = () => {
    return (
        <section className="SolicitudesActivas-section">
            <div className="Solicitudes-section-header">
                <h2>Solicitudes</h2>
            </div>
            <div className="activas-historial-filtro">
                <a href="#" className="selected">
                    Activas
                </a>
                <a href="#">Historial</a>
            </div>
            <div className="solicitudes-container">
                <CardSolicitudActiva
                    badge={"En camino"}
                    nombreProv={"Andres Gutierrez"}
                    categoria={"Plomeria"}
                    infoSolicitud={"Llega en 13 min."}
                />
                <CardSolicitudActiva
                    badge={"Pendiente"}
                    nombreProv={"Emmanuel Perez"}
                    categoria={"Electricista"}
                    infoSolicitud={"Esperando informacion del proveedor"}
                />
                <CardSolicitudActiva
                    badge={"En camino"}
                    nombreProv={"Alberto Pelaez"}
                    categoria={"Cerrajeria"}
                    infoSolicitud={"Llega en 7 min."}
                />
                <CardSolicitudActiva
                    badge={"En proceso"}
                    nombreProv={"Fernanda Herrera"}
                    categoria={"Niñera"}
                    infoSolicitud={"Empezo hace 26 min."}
                />
            </div>
            <div className="solicitudes-container oculto">
                <CardSolicitudCompleta
                    nombreProv={"Alberto Perez"}
                    categoria={"Plomeria"}
                    fechaComp={"24 Jul."}
                />
            </div>
        </section>
    );
};
