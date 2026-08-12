import { SidebarNav } from "../../components/SidebarNav/SidebarNav";
import { Servicios } from "./components/PanelServicios/PanelServicios";
import { Solicitudes } from "./components/PanelSolicitudes/PanelSolicitudes";
import "./Home.css";

export const Home = () => {
	return (
		<div className="dashboard">
			<SidebarNav />
			<Servicios />
			<Solicitudes />
		</div>
	);
};
