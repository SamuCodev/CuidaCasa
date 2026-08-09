import {
	IconHome2,
	IconMapPin,
	IconListCheck,
	IconUser,
} from "@tabler/icons-react";
import "./BottomNav.css";

export const BottomNav = () => {
	return (
		<nav className="bottom-nav">
			<a href="#" className="bottom-nav__item bottom-nav__item---activo">
				<IconHome2 size={22} stroke={1.8} />
				<span>Inicio</span>
			</a>
			<a href="#" className="bottom-nav__item">
				<IconMapPin size={22} stroke={1.8} />
				<span>Mapa</span>
			</a>
			<a href="#" className="bottom-nav__item">
				<IconListCheck size={22} stroke={1.8} />
				<span>Solicitudes</span>
			</a>
			<a href="#" className="bottom-nav__item">
				<IconUser size={22} stroke={1.8} />
				<span>Perfil</span>
			</a>
		</nav>
	);
};
