import "./Header.css";

export const Header = () => {
	return (
		<header>
			<div className="titulo">
				<svg
					className="titulo-icono"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M3 10.5 12 3l9 7.5" />
					<path d="M5.5 9.5V21h13V9.5" />
					<path d="M9 21v-6h6v6" />
				</svg>
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
