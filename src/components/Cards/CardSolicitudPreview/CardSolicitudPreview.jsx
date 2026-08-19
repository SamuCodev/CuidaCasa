import "./CardSolicitudPreview.css";

export const CardSolicitudPreview = ({
	nombreProv,
	categoria,
	distancia,
	calificacion,
}) => {
	return (
		<article className="servicio">
			<div className="servicio-info">
				<h3>{nombreProv}</h3>
				<p className="categoria">{categoria}</p>
				<p>{distancia}</p>
			</div>
			<p>{calificacion} ⭐</p>
		</article>
	);
};
