import { SidebarNav } from "../SidebarNav/SidebarNav";
import { Servicios } from "../PanelServicios/Servicios";
import { Solicitudes } from "../PanelSolicitudes/Solicitudes";
import "./DashboardLayout.css";

export const Dashboard = () => {
	return (
		<div className="dashboard">
			<SidebarNav />
			<Servicios />
			<Solicitudes />
		</div>
	);
};
