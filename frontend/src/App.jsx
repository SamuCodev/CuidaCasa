import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ServiciosSection } from "./Pages/Servicios/ServiciosSection";
import { Home } from "./Pages/Home/Home";
import { SolicitudesSection } from "./Pages/Solicitudes/SolicitudesSection";
import { Login } from "../src/Pages/Login/Login";
import { Registro } from "./Pages/Register/Registro";
import { Perfil } from "./Pages/Perfil/Perfil";
import { ProtectedRoute } from "./components/ProtectedRoute";
export const App = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            <Route
                element={
                    <ProtectedRoute>
                        <Layout />
                    </ProtectedRoute>
                }
            >
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<ServiciosSection />} />
                <Route path="/solicitudes" element={<SolicitudesSection />} />
                <Route path="/perfil" element={<Perfil />} />
            </Route>
        </Routes>
    );
};
