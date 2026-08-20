import { NavLink } from "react-router-dom";
import {
    IconHome2,
    IconListSearch,
    IconListCheck,
    IconUser,
} from "@tabler/icons-react";
import "./BottomNav.css";

export const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive
                        ? "bottom-nav__item bottom-nav__item--activo"
                        : "bottom-nav__item"
                }
            >
                <IconHome2 size={22} stroke={1.8} />
                <span>Inicio</span>
            </NavLink>
            <NavLink
                to="/servicios"
                end
                className={({ isActive }) =>
                    isActive
                        ? "bottom-nav__item bottom-nav__item--activo"
                        : "bottom-nav__item"
                }
            >
                <IconListSearch size={22} stroke={1.8} />
                <span>Servicios</span>
            </NavLink>

            <NavLink
                to="/solicitudes"
                end
                className={({ isActive }) =>
                    isActive
                        ? "bottom-nav__item bottom-nav__item--activo"
                        : "bottom-nav__item"
                }
            >
                <IconListCheck size={22} stroke={1.8} />
                <span>Solicitudes</span>
            </NavLink>

            <NavLink
                to="/perfil"
                end
                className={({ isActive }) =>
                    isActive
                        ? "bottom-nav__item bottom-nav__item--activo"
                        : "bottom-nav__item"
                }
            >
                <IconUser size={22} stroke={1.8} />
                <span>Perfil</span>
            </NavLink>
        </nav>
    );
};
