import {
    IconEdit,
    IconPlus,
    IconHome,
    IconLock,
    IconLogout,
    IconHelp,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Perfil.css";

export const Perfil = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <section className="perfil">
            <div className="user-info">
                <span className="avatar">SD</span>
                <h2>
                    {user.nombre} {user.apellido}
                </h2>
                <p>{user.correo}</p>
                <p>{user.rol}</p>
                <button>
                    <IconEdit size={18} stroke={1.8} />
                    Editar perfil
                </button>
            </div>
            <div className="profile-main">
                <div className="profile-main-header">
                    <h3>Mis direcciones</h3>
                    <a href="#">
                        <IconPlus size={18} stroke={1.8} /> Agregar
                    </a>
                </div>
                <div className="direcciones-container">
                    <article className="card-direccion">
                        <div className="direccion">
                            <IconHome size={22} stroke={2} />
                            <div className="direccion-info">
                                <h3>Casa</h3>
                                <p>Calle 57 #59A48</p>
                            </div>
                        </div>
                        <span className="badge">Principal</span>
                    </article>
                </div>
                <div className="options">
                    <a href="#" className="opt contraseña">
                        <IconLock size={22} stroke={2} />
                        Cambiar contraseña
                    </a>
                    <a href="#" className="opt contraseña">
                        <IconHelp size={22} stroke={2} />
                        Ayuda y soporte
                    </a>
                </div>
                <button className="btn-logout" onClick={handleLogout}>
                    <p>Cerrar Sesion</p>
                    <IconLogout size={22} stroke={2} />
                </button>
            </div>
        </section>
    );
};
