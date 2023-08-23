import React from "react";

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="color-selector">
      <p>Renk Seç</p>
      {colors.map((color, index) => (

        <span
          key={index}
          className={`color-option ${selectedColor === color ? "selected" : ""}`}
          style={{ backgroundImage: "url('/assets/variations/" + color + ".png')" }}
          onClick={() => onColorChange(color)}
        >{color}</span>
      ))}
    </div>
  );
};

export default ColorSelector;