import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Master from "./components/Master";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className="App">
				<Master />
			</div>
		</BrowserRouter>
	);
}

export default App;
