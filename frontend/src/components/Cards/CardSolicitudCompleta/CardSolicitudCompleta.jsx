import "./CardSolicitudCompleta.css"

export const CardSolicitudCompleta = ({nombreProv, categoria, fechaComp}) =>{
	return(
		<article className="solicitud-completa">
			<div className="solicitud-header">
				<p>Estado</p>
				<span className="badge">Completado</span>
			</div>
			<div className="solicitud-main">
				<div>
					<h3>{nombreProv}</h3>
                    <p className="categoria">{categoria}</p>
                    <p>Completado el {fechaComp}</p>
				</div>
			</div>
		</article>
	)
}