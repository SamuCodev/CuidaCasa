import { IconHome } from "@tabler/icons-react";
import "../../styles/auth.css";
import "./Registro.css";

export const Registro = () => {
    return (
        <section className="auth">
            <div className="auth-card">
                <div className="logo">
                    <IconHome size={55} stroke={2} />
                    <h1>CuidaCasa</h1>
                </div>
                <h2>Registro de usuario</h2>
                <div className="info-user">
                    <div className="inputs">
                        <div className="nombre">
                            <h3>Nombre</h3>
                            <input type="text" />
                        </div>
                        <div className="apellido">
                            <h3>Apellido</h3>
                            <input type="text" />
                        </div>
                        <div className="correo">
                            <h3>Correo</h3>
                            <input type="email" />
                        </div>
                        <div className="contraseña">
                            <h3>Contraseña</h3>
                            <input type="password" />
                        </div>
                        <h3>Tipo de usuario: </h3>
                        <div className="user-type">
                            <button>Consumidor</button>
                            <button>Proveedor</button>
                        </div>
                    </div>
                </div>
                <button>Registrar</button>
                <a href="#">¿Ya tienes cuenta? Inicia Sesion</a>
            </div>
        </section>
    );
};
