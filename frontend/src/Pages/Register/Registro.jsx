import { IconBriefcase2, IconHome, IconUser } from "@tabler/icons-react";
import "../../styles/auth.css";
import "./Registro.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: "",
        tipoUsuario: "cliente",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const respuesta = await fetch("http://127.0.0.1:8000/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: formData.nombre,
                apellido: formData.apellido,
                correo: formData.correo,
                password: formData.contraseña,
                rol: formData.tipoUsuario,
            }),
        });
        if (respuesta.ok) {
            const datos = await respuesta.json();
            console.log("¡Usuario creado!", datos);
        } else {
            const datosError = await respuesta.json();
            console.log("Error", datosError);
        }
    };

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

                <form className="registro-form" onSubmit={handleSubmit}>
                    <div className="registro-form__grid">
                        <label>
                            Nombre
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Apellido
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Tu apellido"
                                value={formData.apellido}
                                onChange={handleChange}
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
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Contraseña
                        <input
                            type="password"
                            name="contraseña"
                            placeholder="Mínimo 8 caracteres"
                            minLength="8"
                            value={formData.contraseña}
                            onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
