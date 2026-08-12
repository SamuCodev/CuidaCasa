import "./CardSolicitudActiva.css";

export const CardSolicitudActiva = ({ badge, nombreProv, tiempoLlegada }) => {
	return (
		<article className="solicitud">
			<div className="solicitud-header">
				<p>Estado</p>
				<span className="badge">{badge}</span>
			</div>
			<div className="solicitud-main">
				<div>
					<h3>{nombreProv}</h3>
					<p className="tiempo-llegada">Tiempo de llegada aprox.</p>
					<p>{tiempoLlegada}</p>
				</div>
			</div>
		</article>
	);
};
