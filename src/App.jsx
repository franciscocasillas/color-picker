import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
	const colors = ["red", "green", "blue"];
	const [selectedColor, setSelectedColor] = useState("");

	const handleColorSelect = (selectedColor) => {
		console.log("Selected color:", selectedColorcolor);
		setSelectedColor(selectedColorcolor);
		document.body.style.backgroundColor = selectedColorcolor;
	};

	return (
		<div>
			<h2>Pick a color:</h2>
			<ColorPicker colors={colors} onColorSelect={handleColorSelect} />
		</div>
	);
}

export default App;
