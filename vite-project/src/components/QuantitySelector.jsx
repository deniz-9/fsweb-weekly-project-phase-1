
import React, { useState } from "react";

const QuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // onQuantityChange(quantity);

  return (
    <div className="quantity-selector my-custom-class">
      <p className="quantity-option-title">Adet :</p>
      <div className="quantity-controls">
        <button className="quantity-button" onClick={decreaseQuantity}>
          -
        </button>
       
        <span className="quantity">{quantity}</span>
        <button className="quantity-button2" onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
