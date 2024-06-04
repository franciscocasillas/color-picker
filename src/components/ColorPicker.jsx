import "../stylesheets/ColorPicker.css";

function ColorPicker({ color, onColorSelect }) {
	return (
		<button className={color} onClick={() => onColorSelect(color)}>
			{color}
		</button>
	);
}

export default ColorPicker;
