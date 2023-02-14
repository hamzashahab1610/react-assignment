import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup/Popup";

function App() {
	const [isPopupOpen, setisPopupOpen] = useState(false);
	return (
		<div className="App">
			{isPopupOpen ? (
				<Popup setisPopupOpen={setisPopupOpen} />
			) : (
				<button onClick={() => setisPopupOpen(true)}>Open Popup</button>
			)}
		</div>
	);
}

export default App;
