import { IconHome } from "@tabler/icons-react";

import "./Header.css";

export const Header = () => {
	return (
		<header>
			<div className="titulo">
				<IconHome size={30} stroke={2}/>
				<h1 className="title">CuidaCasa</h1>
			</div>
			{/* <div className="header-options">
				<button className="ubicacion">
					<img
						src="./src/assets/images/location.png"
						alt="Ubicacion"
					/>
					Laureles, Medellin
				</button>
				<span aria-label="Perfil de usuario">SD</span>
			</div> */}
		</header>
	);
};
