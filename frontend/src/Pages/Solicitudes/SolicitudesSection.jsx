import { useState } from "react";
import { CardSolicitudActiva } from "../../components/Cards/CardSolicitudActiva/CardSolicitudActiva";
import { CardSolicitudCompleta } from "../../components/Cards/CardSolicitudCompleta/CardSolicitudCompleta";

import "./SolicitudesSection.css";
export const SolicitudesSection = () => {
    const [vista, setVista] = useState("activas");
    return (
        <section className="Solicitudes-activas__section">
            <div className="activas-historial__filtro">
                <button
                    className={
                        vista === "activas"
                            ? "activas-historial__filtro-activas selected"
                            : "activas-historial__filtro-activas"
                    }
                    onClick={() => setVista("activas")}
                >
                    Activas
                </button>
                <button
                    className={
                        vista === "completadas"
                            ? "activas-historial__filtro-historial selected"
                            : "activas-historial__filtro-historial"
                    }
                    onClick={() => setVista("completadas")}
                >
                    Historial
                </button>
            </div>
            {vista === "activas" && (
                <div className="solicitudes-container__activas">
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
            )}
            {vista === "completadas" && (
                <div className="solicitudes-container__completadas">
                    <CardSolicitudCompleta
                        nombreProv={"Alberto Perez"}
                        categoria={"Plomeria"}
                        fechaComp={"24 Jul."}
                    />
                </div>
            )}
        </section>
    );
};
