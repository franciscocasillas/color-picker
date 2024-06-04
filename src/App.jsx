import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
	const colors = ["red", "green", "blue"];
	const [selectedColor, setSelectedColor] = useState("");

	const handleColorSelect = (selectedColor) => {
		console.log("Selected color:", selectedColor);
		setSelectedColor(selectedColor);
		if (selectedColor === "red") {
			document.body.style.backgroundColor = "rgb(245, 106, 106)";
		} else if (selectedColor === "green") {
			document.body.style.backgroundColor = "rgb(75, 201, 109)";
		} else {
			document.body.style.backgroundColor = "rgb(67, 118, 199)";
		}
	};

	return (
		<div>
			<h2>Pick a color:</h2>
			<ColorPicker colors={colors} onColorSelect={handleColorSelect} />
		</div>
	);
}

export default App;
