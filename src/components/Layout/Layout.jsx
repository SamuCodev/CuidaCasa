import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { BottomNav } from "../BottomNav/BottomNav";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <BottomNav />
        </>
    );
};
