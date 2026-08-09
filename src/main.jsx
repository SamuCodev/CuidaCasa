import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { App } from "./components/App/App";
import "./styles/tokens.css";
import "./styles/reset.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<BottomNav />
	</StrictMode>,
);
