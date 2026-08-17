import "./CardProveedor.css";

export const CardProveedor = ({
	nombreProv,
	categoria,
	distancia,
	calificacion,
}) => {
	return (
		<article className="servicio">
			<div className="servicio-info">
				<h3>{nombreProv}</h3>
				<p>{categoria}</p>
				<p>{distancia}</p>
			</div>
			<p>{calificacion} ⭐</p>
		</article>
	);
};
