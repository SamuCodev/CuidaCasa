import { IconHome } from "@tabler/icons-react";
import "../../styles/auth.css";

export const Login = () => {
    return (
        <section className="auth">
            <div className="auth-card">
                <div className="logo">
                    <IconHome size={55} stroke={2} />
                    <h1>CuidaCasa</h1>
                </div>
                <div className="inputs">
                    <label>Correo</label>
                    <div className="email-input">
                        <input type="email" />
                        <span>Ej: user@gmail.com</span>
                    </div>
                    <label>Contraseña</label>
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
