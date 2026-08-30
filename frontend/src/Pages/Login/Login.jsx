import { IconHome } from "@tabler/icons-react";
import "../../styles/auth.css";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <section className="auth">
            <div className="auth-card">
                <div className="logo">
                    <IconHome size={55} stroke={2} />
                    <h1>CuidaCasa</h1>
                </div>
                <form className="inputs">
                    <label className="email-input">
                        Correo
                        <input type="email" placeholder="Nombre@gmail.com" />
                    </label>
                    <label className="passw-input">
                        Contraseña
                        <input
                            type="password"
                            placeholder="Ingrese su contraseña"
                        />
                    </label>

                    <a href="#">¿Olvidaste tu contraseña?</a>
                </form>
                <button type="submit">Ingresar</button>

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
