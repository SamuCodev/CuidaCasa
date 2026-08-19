import { IconHome } from "@tabler/icons-react";
import "./Login.css";

export const Login = () => {
    return (
        <section className="login">
            <div className="card-login">
                <div className="logo">
                    <IconHome size={55} stroke={2} />
                    <h1>CuidaCasa</h1>
                </div>
                <div className="inputs">
                    <h2>Correo</h2>
                    <div className="email-input">
                        <input type="email" />
                        <span>Ej: user@gmail.com</span>
                    </div>
                    <h2>Contraseña</h2>
                    <div className="passw-input">
                        <input type="password" />
                        <span>Ingrese una contraseña correcta</span>
                    </div>

                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit">Ingresar</button>
                <a href="#">No tienes una cuenta? Crea una</a>
            </div>
        </section>
    );
};
