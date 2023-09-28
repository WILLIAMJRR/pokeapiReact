import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//router
import { HashRouter } from "react-router-dom";

// redux
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	// Provider es un Component Q SE VINCULA AL STORE y se envuelve en la aplicacion

	<React.StrictMode>
		{/* paso 6 envolver el app con hashrouter */}
		<HashRouter>
			{/* paso 2  provider se vinvula al un store */}
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>,
);
