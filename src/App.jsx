import { ServiciosSection } from "./Pages/Servicios/ServiciosSection";
// import { Home } from "./Pages/Home/Home";
// import { SolicitudesSection } from "./Pages/Solicitudes/SolicitudesSection";
// import { Login } from "../src/Pages/Login/Login";
// import { Registro } from "./Pages/Register/Registro";
import "./App.css";

export const App = () => {
    return (
        <div className="app">
            {/* <Registro /> */}
            {/* <Login /> */}
            <ServiciosSection />
            {/* <Home /> */}
            {/* <SolicitudesSection /> */}
        </div>
    );
};
