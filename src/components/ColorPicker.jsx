import "../stylesheets/ColorPicker.css";

function ColorPicker({ colors, onColorSelect }) {
	return (
		<div>
			{colors.map((color) => (
				<button
					key={color}
					className={color}
					onClick={() => onColorSelect(color)}
				>
					{color}
				</button>
			))}
		</div>
	);
}

export default ColorPicker;
