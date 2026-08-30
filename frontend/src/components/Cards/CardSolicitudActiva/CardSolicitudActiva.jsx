import "./CardSolicitudActiva.css";

export const CardSolicitudActiva = ({ badge, nombreProv, categoria, infoSolicitud }) => {
	return (
		<article className="solicitud">
			<div className="solicitud-header">
				<p>Estado</p>
				<span className="badge">{badge}</span>
			</div>
			<div className="solicitud-main">
					<h3>{nombreProv}</h3>
					<p className="categoria">{categoria}</p>
					<p className="info-solicitud">{infoSolicitud}</p>
			</div>
		</article>
	);
};
