import React from "react";

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className="size-selector">
      <p className="size-option-title">Bedeni Seç :</p>
      {sizes.map((size, index) => (
        <button
          key={index}
          className={`size-option ${selectedSize === size ? "selected" : ""}`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;