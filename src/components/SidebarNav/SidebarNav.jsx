import {
	IconWashMachine,
	IconBabyCarriage,
	IconGardenCart,
	IconBolt,
	IconKey,
	IconPlunger,
} from "@tabler/icons-react";

import "./SidebarNav.css";

export const SidebarNav = () => {
	return (
		<aside className="sidebarNav">
			<h2>Categorias</h2>
			<nav className="categorias">
				<a href="#" className="categoria__item selected">
					<IconWashMachine size={22} stroke={1.8} />
					<span>Aseo</span>
				</a>
				<a href="#" className="categoria__item">
					<IconPlunger size={22} stroke={1.8} />
					<span>Plomeria</span>
				</a>
				<a href="#" className="categoria__item">
					<IconBolt size={22} stroke={1.8} />
					<span>Electricidad</span>
				</a>
				<a href="#" className="categoria__item">
					<IconGardenCart size={22} stroke={1.8} />
					<span>Jardineria</span>
				</a>
				<a href="#" className="categoria__item">
					<IconBabyCarriage size={22} stroke={1.8} />
					<span>Niñeras</span>
				</a>
				<a href="#" className="categoria__item">
					<IconKey size={22} stroke={1.8} />
					<span>Cerrajeria</span>
				</a>
			</nav>
		</aside>
	);
};
