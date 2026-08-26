import { IconBriefcase2, IconHome, IconUser } from "@tabler/icons-react";
import "../../styles/auth.css";
import "./Registro.css";
import { Link } from "react-router-dom";

export const Registro = () => {
    return (
        <section className="auth">
            <main className="auth-card registro-card">
                <div className="logo">
                    <IconHome size={34} stroke={2} />
                    <h1>CuidaCasa</h1>
                </div>

                <div className="registro-intro">
                    <h2>Crea tu cuenta</h2>
                    <p>Encuentra ayuda confiable para cuidar tu hogar.</p>
                </div>

                <form className="registro-form">
                    <div className="registro-form__grid">
                        <label>
                            Nombre
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Tu nombre"
                                required
                            />
                        </label>
                        <label>
                            Apellido
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Tu apellido"
                                required
                            />
                        </label>
                    </div>

                    <label>
                        Correo electrónico
                        <input
                            type="email"
                            name="correo"
                            placeholder="nombre@correo.com"
                            required
                        />
                    </label>
                    <label>
                        Contraseña
                        <input
                            type="password"
                            name="contrasena"
                            placeholder="Mínimo 8 caracteres"
                            minLength="8"
                            required
                        />
                    </label>

                    <fieldset className="registro-type">
                        <legend>¿Cómo quieres usar CuidaCasa?</legend>
                        <div className="registro-type__options">
                            <label className="registro-choice">
                                <input
                                    type="radio"
                                    name="tipoUsuario"
                                    value="cliente"
                                    defaultChecked
                                />
                                <IconUser size={19} stroke={2} />
                                <span>
                                    <strong>Cliente</strong>Buscar servicios
                                </span>
                            </label>
                            <label className="registro-choice">
                                <input
                                    type="radio"
                                    name="tipoUsuario"
                                    value="proveedor"
                                />
                                <IconBriefcase2 size={19} stroke={2} />
                                <span>
                                    <strong>Proveedor</strong>Ofrecer servicios
                                </span>
                            </label>
                        </div>
                    </fieldset>

                    <button className="registro-submit" type="submit">
                        Crear cuenta
                    </button>
                </form>

                <p className="registro-login">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login">Inicia sesión</Link>
                </p>
            </main>
        </section>
    );
};
