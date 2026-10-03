import { IconHome } from "@tabler/icons-react";
import "../../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        correo: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const respuesta = await fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                correo: formData.correo,
                password: formData.password,
            }),
        });
        if (respuesta.ok) {
            const datos = await respuesta.json();
            login(datos.access_token, {
                nombre: datos.nombre,
                apellido: datos.apellido,
                correo: datos.correo,
                rol: datos.rol,
            });
            navigate("/");
        } else {
            const datosError = await respuesta.json();
            console.log("Error", datosError);
        }
    };

    return (
        <section className="auth">
            <div className="auth-card">
                <div className="logo">
                    <IconHome size={55} stroke={2} />
                    <h1>CuidaCasa</h1>
                </div>
                <form className="inputs" onSubmit={handleSubmit}>
                    <label className="email-input">
                        Correo
                        <input
                            type="email"
                            name="correo"
                            placeholder="Nombre@gmail.com"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className="passw-input">
                        Contraseña
                        <input
                            type="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <a href="#">¿Olvidaste tu contraseña?</a>

                    <button type="submit">Ingresar</button>
                </form>

                <p>
                    ¿Aun no tienes cuenta?{" "}
                    <Link to={"/registro"} end>
                        Crea una
                    </Link>
                </p>
            </div>
        </section>
    );
};
