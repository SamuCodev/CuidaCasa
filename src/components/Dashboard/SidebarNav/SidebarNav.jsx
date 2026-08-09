import "./SidebarNav.css";

export const SidebarNav = () => {
	return (
		<aside className="sidebarNav">
			<nav className="categorias">
				<button className="selected">Plomeria</button>
				<button>Aseo</button>
				<button>Electricidad</button>
				<button>Jardineria</button>
				<button>Niñeras</button>
				<button>Cerrajeria</button>
			</nav>
		</aside>
	);
};
