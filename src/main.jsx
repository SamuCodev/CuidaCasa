import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { App } from "./App";
import { Header } from "./components/Header/Header";
import "./styles/tokens.css";
import "./styles/reset.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <Header /> */}
        <App />
        {/* <BottomNav /> */}
    </StrictMode>,
);
