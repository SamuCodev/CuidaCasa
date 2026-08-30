import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { BottomNav } from "../BottomNav/BottomNav";

import "./layout.css";

export const Layout = () => {
    return (
        <div className="app-layout">
            <BottomNav />
            <div className="app-content">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};
