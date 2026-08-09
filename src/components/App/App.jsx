import { Header } from "../Header/Header";
import { Dashboard } from "../Dashboard/DashboardLayout/DashboardLayout";
import "./App.css";

export const App = () => {
	return (
		<div className="app">
			<Header />
			<Dashboard />
		</div>
	);
};
