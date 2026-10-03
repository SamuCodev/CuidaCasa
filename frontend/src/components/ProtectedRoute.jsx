import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};
