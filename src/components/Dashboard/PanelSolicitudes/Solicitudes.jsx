import "./Solicitudes.css";

export const Solicitudes = () => {
	return (
		<aside className="solicitudes">
			<h2>Solicitudes Activas</h2>
			<div className="solicitudes-container">
				<article className="solicitud">
					<div className="solicitud-header">
						<p>Estado</p>
						<span className="badge">Activa</span>
					</div>
					<div className="solicitud-main">
						<div>
							<h3>Julian Restrepo</h3>
							<p>Llega en 13 min</p>
						</div>
					</div>
				</article>
				<article className="solicitud">
					<div className="solicitud-header">
						<p>Estado</p>
						<span className="badge">Activa</span>
					</div>
					<div className="solicitud-main">
						<div>
							<h3>Julian Restrepo</h3>
							<p>Llega en 13 min</p>
						</div>
					</div>
				</article>
			</div>
		</aside>
	);
};
