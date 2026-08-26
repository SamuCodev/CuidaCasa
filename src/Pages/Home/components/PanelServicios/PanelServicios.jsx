import { CardSolicitudPreview } from "../../../../components/Cards/CardSolicitudPreview/CardSolicitudPreview";
import "./PanelServicios.css";
export const Servicios = () => {
    return (
        <main>
            <div className="servicios">
                <h2>Proveedores destacados</h2>
                <div className="servicios-container">
                    <CardSolicitudPreview
                        nombreProv={"Julian Restrepo"}
                        categoria={"Jardineria"}
                        distancia={"0.7km"}
                        calificacion={4.8}
                    />
                    <CardSolicitudPreview
                        nombreProv={"Fernando Ospina"}
                        categoria={"Plomeria"}
                        distancia={"2.4km"}
                        calificacion={4.2}
                    />
                    <CardSolicitudPreview
                        nombreProv={"Alberto Perez"}
                        categoria={"Electricidad"}
                        distancia={"1.7km"}
                        calificacion={4.6}
                    />
                    <CardSolicitudPreview
                        nombreProv={"Julian Restrepo"}
                        categoria={"Jardineria"}
                        distancia={"0.7km"}
                        calificacion={4.8}
                    />
                    <CardSolicitudPreview
                        nombreProv={"Fernando Ospina"}
                        categoria={"Plomeria"}
                        distancia={"2.4km"}
                        calificacion={4.2}
                    />
                    <CardSolicitudPreview
                        nombreProv={"Alberto Perez"}
                        categoria={"Electricidad"}
                        distancia={"1.7km"}
                        calificacion={4.6}
                    />
                </div>
            </div>
        </main>
    );
};
