import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Mapa = () => {
	return (
		<div className="mapa">
			<MapContainer
				center={[6.2442, -75.5812]}
				zoom={15}
				style={{ height: "100%", width: "100%" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[6.2442, -75.5812]}>
					<Popup>Medellin</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};
