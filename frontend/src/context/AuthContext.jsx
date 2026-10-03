import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("access_token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = (token, userData) => {
        setToken(token);
        setUser(userData);
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("Inicio de sesion exitoso");
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        console.log("Cierre de sesion exitoso");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};
